import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Home from './Home';
import {firebaseLogout} from 'store/Authentication/actions';
import {getFirebaseUserDetails} from 'store/Authentication/selectors';
export class HomeContainer extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  userDetails: getFirebaseUserDetails(state),
});

const mapDispatchToProps = (dispatch) => ({
  logout: bindActionCreators(firebaseLogout, dispatch),
});
HomeContainer.propTypes = {
  logout: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
