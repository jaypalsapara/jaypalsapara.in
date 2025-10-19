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
        loader: async ({ params }) => {
          const { id } = params;
          const queryClient = new QueryClient();
          await Promise.all([
            queryClient.prefetchQuery({
              queryKey: [`project_${id}`],
              queryFn: () => import(`@/data/projects/${id}.json`).then((res) => res.default),
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
