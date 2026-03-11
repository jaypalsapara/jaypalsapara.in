import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './index.css';

const Home = lazy(() => import('@/pages/home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
