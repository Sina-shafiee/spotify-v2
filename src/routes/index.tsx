import { useRoutes } from 'react-router-dom';

import { Main, NotFound } from '../pages/Main';

import HomeLayout from '../layouts/HomeLayout';
import MainLayout from '../layouts/MainLayout';

import { Bye, Home } from '../pages/Home';
import ProtectedRoute from './ProtectedRoutes';

const AppRoutes = () => {
  const MainRoutes = [
    {
      element: <MainLayout />,
      children: [
        { path: '/', element: <Main />, key: 'main' },
        { path: '*', element: <NotFound />, key: 'not-found' }
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
        { index: true, element: <Home />, key: 'home' },
        { path: 'album/:id', element: <Bye />, key: 'bye' }
      ]
    }
  ];

  const routes = useRoutes([...MainRoutes, ...HomeRoutes]);
  return routes;
};

export default AppRoutes;
