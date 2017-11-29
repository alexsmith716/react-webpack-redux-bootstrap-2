import App from './modules/App/App';
import About from './modules/About/About';
import Mii from "./modules/Mii/Mii";

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Mii
      },
      { path: '/about',
        component: About
      }
    ]
  }
];

export default routes;
