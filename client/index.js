
import React from 'react';
import { render } from 'react-dom';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

import { AppContainer } from 'react-hot-loader';
import App from './modules/App/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import routes from './routes';
import reducers from './reducers';

/*eslint-disable no-undef*/
const mountApp = document.getElementById('root');

const store = createStore(
  reducers, window.__INITIAL_STATE__, applyMiddleware(thunk)
);

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
}

render(
  <AppRouter/>,
  mountApp
);
/*
const renderApp = () =>
  render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    mountApp
  );

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes');
    renderApp({ routes: nextRoutes });
  });
}

renderApp();
*/









