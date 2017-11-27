
import App from './modules/App/App';
import Home from "./modules/Home/Home";
import About from './modules/About/About';
import Signup from './modules/Signup/Signup';
import Login from './modules/Login/Login';
import Contact from './modules/Contact/Contact';


const routes = [

  { component: App,

    routes: [

      { path: '/',
        exact: true,
        component: Home
      },

      { path: '/about',
        component: About
      },

      { path: '/signup',
        component: Signup
      },

      { path: '/login',
        component: Login
      },

      { path: '/contact',
        component: Contact
      },

    ]

  }

];

export default routes;
