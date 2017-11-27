
import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types'
import Header from './components/header/header';
import Helmet from 'react-helmet';
import "../../assets/global.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    route: PropTypes.object 
  }
 
  render() {
    return (
      <div>
       
        <div>
          <Helmet
            title="react-webpack-redux-bootstrap"
            titleTemplate="%s - Tester App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header/>

          <div className="container">
            {renderRoutes(this.props.route.routes)}
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(App);
