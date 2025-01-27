import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import App from '../App/App'

// The application top level route.
class Root extends Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter basename='/' history={this.props.history}>
          <Route path='/' component={App} />
        </ConnectedRouter>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
