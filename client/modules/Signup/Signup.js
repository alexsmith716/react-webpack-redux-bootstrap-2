
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData as getTxt } from './SignupActions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import styles from './signup.scss';


class Signup extends Component {

  static propTypes = {
    signupData: PropTypes.string,
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
            <span className={styles.stylesScss__data_string}>{this.props.signupData}</span>
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

function mapStateToProps({signup}) {
  return {
    signupData: signup.data,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getTxt }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));

