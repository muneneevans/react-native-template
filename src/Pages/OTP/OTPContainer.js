import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import OTP from './OTP';

import {firebaseLogin} from 'store/Authentication/actions';
import {} from 'store/Authentication/selectors';

export class OTPContainer extends Component {
  constructor(props) {
    super(props);

    this.confirmCode = this.confirmCode.bind(this);
  }

  //#region lifecycle methods
  componentDidUpdate() {}
  //#endregion

  //#region handlers
  async confirmCode(code) {
    try {
      const {confirm} = this.props.route.params;
      let response = await confirm.confirm(code);
      this.props.firebaseLogin(response);
    } catch (error) {
      console.log(error);
      console.log('Invalid code.');
    }
  }

  //#endregion

  render() {
    return <OTP {...this.props} confirmCode={this.confirmCode} />;
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  firebaseLogin: bindActionCreators(firebaseLogin, dispatch),
});

OTPContainer.propTypes = {
  route: PropTypes.object,
  firebaseLogin: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(OTPContainer);
