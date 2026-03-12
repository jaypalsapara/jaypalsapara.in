import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './index.css';

const Home = lazy(() => import('@/pages/home'));
const Ui = lazy(() => import('@/pages/ui'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/ui',
    element: <Ui />,
  },
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
