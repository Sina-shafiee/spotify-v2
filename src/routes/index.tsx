import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

import HomeLayout from '../layouts/HomeLayout';
import MainLayout from '../layouts/MainLayout';

import ProtectedRoute from './ProtectedRoutes';

const AppRoutes = () => {
  const Main = lazy(() => import('../pages/Main/Main'));
  const NotFound = lazy(() => import('../pages/Main/NotFound'));
  const Home = lazy(() => import('../pages/Home/Home'));
  const Albums = lazy(() => import('../pages/Home/Album/Albums'));
  const SingleAlbum = lazy(
    () => import('../pages/Home/Album/SingleAlbum/SingleAlbum')
  );

  const MainRoutes = [
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<Loading />}>
              <Main />
            </Suspense>
          ),
          key: 'main'
        },
        {
          path: '*',
          element: (
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          ),
          key: 'not-found'
        }
      ]
    }
  ];

  const HomeRoutes = [
    {
      element: (
        <ProtectedRoute>
          <HomeLayout />
        </ProtectedRoute>
      ),
      path: '/home/*',
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
          key: 'home'
        },
        {
          path: 'album',
          Element: (
            <Suspense fallback={<Loading />}>
              <Albums />
            </Suspense>
          ),
          key: 'Albums'
        },
        {
          path: 'album/:id',
          element: (
            <Suspense fallback={<Loading />}>
              <SingleAlbum />
            </Suspense>
          ),
          key: 'singleAlbum'
        },
        {
          path: '*',
          element: (
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          ),
          key: 'not-found'
        }
      ]
    }
  ];

  const routes = useRoutes([...MainRoutes, ...HomeRoutes]);
  return routes;
};

export default AppRoutes;
