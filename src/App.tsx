import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';
import { Layout } from './components/layout';
import { APP_ROUTES } from './constants/router';

const Home = lazy(() => import('./pages/Home'));
const Book = lazy(() => import('./pages/Book'));
const AddBook = lazy(() => import('./pages/AddBook'));
const NotFound = lazy(() => import('./pages/NotFound'));

const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: (
      <Layout>
        <Suspense>
          <Outlet />
          <Toaster />
        </Suspense>
      </Layout>
    ),
    children: [
      {
        path: APP_ROUTES.HOME,
        element: <Home />,
      },
      {
        path: APP_ROUTES.BOOK,
        element: <Book />,
      },
      {
        path: APP_ROUTES.ADD_BOOK,
        element: <AddBook />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
