import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import appConfig from '../appConfig';
import webpack from 'webpack';
import webpackDev from '../webpack.config.dev.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';


// ####################################################################################
// create individual page schema objects in mongo
import createPageSchemaObjects from '../util/createPageSchemaObjects';

// pull in apiRoutes
import apiRoutes from './routes/apiRoutes';
// ####################################################################################


const app = new Express();

console.log('>>>>>>>>>> process.env.NODE_ENV: ', process.env.NODE_ENV)

// if development, transpile ES5, bundle client and initiate webpack hot-reloading
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackDev);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackDev.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// bring in react & redux
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


// ####################################################################################
import reducers from '../client/reducers';
import routes from '../client/routes';
// ####################################################################################


mongoose.Promise = global.Promise;
mongoose.connect(appConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
  createPageSchemaObjects();
});

app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use('/static', Express.static(path.resolve(__dirname, '../dist/client')));
app.use('/api', apiRoutes);

const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind();
  return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="${process.env.NODE_ENV === 'production' ? '/static/styles.css': '/styles.css'}">
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.script.toString()}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src='${process.env.NODE_ENV === 'production' ? '/static/vendor.js' : '/vendor.js'}'></script>
        <script src='${process.env.NODE_ENV === 'production' ? '/static/app.js': '/app.js'}'></script>
      </body>
    </html>
  `;
};

const store = createStore(reducers, applyMiddleware(thunk));

// Server Side Rendering based on routes matched by React-router.
app.use((req, res, next) => {
  const apiPrefix  = '/api/';
  
  if(req.url.substring(0, apiPrefix.length) === apiPrefix) { 
    return next();
  }
  
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  });

  Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>)
    res
      .set('Content-Type', 'text/html')
      .status(200)
      .end(renderFullPage(content, store.getState()));
      })
      .catch((error) => next(error));
  });

app.listen(appConfig.appPort, (error) => {
  if (!error) {
    console.log(`Server is running on port: ${appConfig.appPort}!`); // eslint-disable-line
  }
});

export default app;
