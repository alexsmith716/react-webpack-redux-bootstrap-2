import ReactDOM from 'react-dom'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import store, { history } from './store'
import Root from './modules/Root'

function renderApp (RootComponent) {
  ReactDOM.render(
    <AppContainer>
      <RootComponent store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
}

renderApp(Root)

if (module.hot) {
  module.hot.accept('./modules/Root', () => {
    const NextApp = require('./modules/Root').default
    renderApp(NextApp)
  })
}
