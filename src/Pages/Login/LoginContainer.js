import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import auth from '@react-native-firebase/auth';

import Login from './Login';
export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: null,
    };

    this.signInWithPhoneNumber = this.signInWithPhoneNumber.bind(this);
    this.confirmCode = this.confirmCode.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  static propTypes = {};

  //#region lifecycle handlers
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.confirm !== this.state.confirm) {
      // navigate to the OTP page
      this.props.navigation.navigate('OTP', {confirm: this.state.confirm});
    }
  }
  //#endregion

  //#region handlers

  async signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log(confirmation);
    this.setState({
      ...this.state,
      confirm: confirmation,
    });
  }

  async confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  signIn(phoneNumber) {
    this.signInWithPhoneNumber(phoneNumber);
  }
  //#endregion

  render() {
    return <Login {...this.props} signIn={this.signIn} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
