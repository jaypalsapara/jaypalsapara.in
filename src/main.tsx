import LoadingBlock from '@/components/loading-block';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layout/app-layout';
import { QueryClient } from '@tanstack/react-query';
import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';

const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));
const Project = lazy(() => import('@/pages/project'));
const Works = lazy(() => import('@/pages/works'));
const Ui = lazy(() => import('@/pages/ui'));
const PageNotFound = lazy(() => import('@/pages/page-not-found'));
const Changelog = lazy(() => import(`@/pages/changelog`));

const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/project/:id',
        Component: Project,
        HydrateFallback: () => (
          <div className="h-[calc(100dvh-4rem)]">
            <LoadingBlock />
          </div>
        ),
        errorElement: <PageNotFound />,
        loader: async ({ params }) => {
          const { id } = params;
          const queryClient = new QueryClient();
          await Promise.all([
            queryClient.prefetchQuery({
              queryKey: [`project_${id}`],
              queryFn: () =>
                import(`@/data/projects/${id}.json`).then((res) => {
                  const data = res.default;
                  // Load first 3 images
                  if (data.media.length > 0) {
                    data.media.slice(0, 3).forEach((img: { url: string }) => (new Image().src = img.url));
                  }
                  return data;
                }),
            }),
            queryClient.prefetchQuery({
              queryKey: [`all-projects`],
              queryFn: () => import(`@/data/all-projects.json`).then((res) => res.default),
            }),
          ]);
        },
      },
      {
        path: 'works',
        Component: Works,
        HydrateFallback: () => (
          <div className="h-[calc(100dvh-4rem)]">
            <LoadingBlock />
          </div>
        ),
        loader: async () => {
          const queryClient = new QueryClient();
          await queryClient.prefetchQuery({
            queryKey: [`all-projects`],
            queryFn: () => import(`@/data/all-projects.json`).then((res) => res.default),
          });
        },
      },
      {
        path: 'changelog',
        Component: Changelog,
        HydrateFallback: () => (
          <div className="h-[calc(100dvh-4rem)]">
            <LoadingBlock />
          </div>
        ),
        loader: async () => {
          const queryClient = new QueryClient();
          await queryClient.prefetchQuery({
            queryKey: [`changelog`],
            queryFn: () => import(`@/data/changelog.json`).then((res) => res.default),
          });
        },
      },
      {
        path: '*',
        Component: PageNotFound,
      },
    ],
  },

  /**
   * UI
   */
  {
    path: 'ui',
    Component: Ui,
  },
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);

// This will set light / dark mode on load...
initializeTheme();
