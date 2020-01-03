import Home from 'components/Home';
import Login from 'components/Login';
import NotFound from 'components/NotFound';

import { RouteTitle, RouteType } from './types';

const Routes: RouteType[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    data: {
      title: RouteTitle.Home,
    },
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    data: {
      title: RouteTitle.Login,
    },
  },
  {
    path: '*',
    component: NotFound,
    data: {
      title: RouteTitle.Error404,
    },
  },
];

export default Routes;
