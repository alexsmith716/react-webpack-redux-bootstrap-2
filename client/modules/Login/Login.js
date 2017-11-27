
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData as getTxt } from './LoginActions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import styles from './login.scss';


class Login extends Component {

  static propTypes={
    loginData: PropTypes.string,
    getTxt: PropTypes.func
  }
  
  static fetchData(store) {
    return store.dispatch(getTxt());
  }

  componentDidMount() {
    this.props.getTxt();
  }

  render() {

    return (
      <div>

          <div>
            <span className={styles.stylesScss__data_string}>{this.props.loginData}</span>
          </div>

          <div>
            <a className={`btn btn-primary ${styles.stylesScss__link_to_main}`} href="/">Home</a>
          </div>

      </div>
    );

  }
}

// actions required to provide data for this component to render sever-side
// retrieve data from store as props

function mapStateToProps({login}) {
  return {
    loginData: login.data,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getTxt }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

