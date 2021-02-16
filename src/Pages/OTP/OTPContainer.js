import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import OTP from './OTP';

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
      console.log(response);
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
const mapDispatchToProps = {};

OTPContainer.propTypes = {
  route: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(OTPContainer);
