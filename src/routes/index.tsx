import { useRoutes } from 'react-router-dom';

import { Main, NotFound } from '../pages/Main';

import HomeLayout from '../layouts/HomeLayout';
import MainLayout from '../layouts/MainLayout';

import { Bye, Home } from '../pages/Home';
import ProtectedRoute from './ProtectedRoutes';

const AppRoutes = () => {
  let MainRoutes = [
    {
      element: <MainLayout />,
      children: [
        { path: '/', element: <Main />, key: 'main' }, // add key prop
        { path: '*', element: <NotFound />, key: 'not-found' } // add key prop
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
        { index: true, element: <Home />, key: 'home' }, // add key prop
        { path: 'bye', element: <Bye />, key: 'bye' } // add key prop
      ]
    }
  ];

  const routes = useRoutes([...MainRoutes, ...HomeRoutes]);
  return routes;
};

export default AppRoutes;
