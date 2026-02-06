import LoadingBlock from '@/components/loading-block';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layout/app-layout';
import { QueryClient } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { About, Changelog, Contact, Home, PageNotFound, Project, Ui, Works } from './constants/lazy-pages';
import './index.css';

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
        loader: async () => {
          new Image().src = '/images/about/img-1.avif';
          new Image().src = '/images/about/img-2.avif';
        },
      },
      {
        path: '/contact',
        Component: Contact,
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
            queryFn: () =>
              import(`@/data/all-projects.json`).then((res) => {
                const data = res.default;
                // Load first some images
                if (data.length > 0) {
                  data.slice(0, 5).forEach((item: { thumbnail: string }) => (new Image().src = item.thumbnail));
                }
                return data;
              }),
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
