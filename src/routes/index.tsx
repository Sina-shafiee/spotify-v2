import { useRoutes } from 'react-router-dom';

import HomeLayout from '../layouts/HomeLayout';
import MainLayout from '../layouts/MainLayout';
import { Bye, Home } from '../pages/Home';
import { Main, NotFound } from '../pages/Main';

const AppRoutes = () => {
  let MainRoutes = [
    {
      element: <MainLayout />,
      children: [
        { path: '/', element: <Main /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ];

  const HomeRoutes = [
    {
      element: <HomeLayout />,
      path: '/home/*',
      children: [
        { index: true, element: <Home /> },
        { path: 'bye', element: <Bye /> }
      ]
    }
  ];

  const routes = useRoutes([...MainRoutes, ...HomeRoutes]);
  return routes;
};

export default AppRoutes;
