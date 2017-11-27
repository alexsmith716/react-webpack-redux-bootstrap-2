
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData as getTxt} from "./HomeActions";
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types';
import styles from './home.scss';

class Home extends Component {
  
  static propTypes={
    getTxt: PropTypes.func,
    homeData: PropTypes.string
  }

  static fetchData(store) {
    return store.dispatch(getTxt());
  }

  componentDidMount() {
    this.props.getTxt();
  }

  render() {
    return (
      <div className={styles.hello_block}>
       <h1>{this.props.homeData}</h1>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
// Retrieve data from store as props

function mapStateToProps({home}) {
  return {
    homeData: home.data,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getTxt }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
