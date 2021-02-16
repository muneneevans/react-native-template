import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import WelcomePage from 'pages/WelcomePage';
import Login from 'pages/Login';
import OTP from 'pages/OTP';
import Home from 'pages/Home';

const Stack = createStackNavigator();

const LoginRoute = () => (
  <Stack.Navigator initialRouteName="WelcomePage">
    <Stack.Screen
      name="WelcomePage"
      component={WelcomePage}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="LoginPage"
      component={Login}
      options={{
        title: 'LOG IN',
        headerTitleStyle: {
          fontFamily: 'AvenirLTStd-Black',
        },
      }}
    />
    <Stack.Screen
      name="OTP"
      component={OTP}
      options={{
        title: 'Verify',
        headerTitleStyle: {
          fontFamily: 'AvenirLTStd-Black',
        },
      }}
    />
  </Stack.Navigator>
);

const HomeRoute = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default function Routes({isUserAuthenticated}) {
  if (isUserAuthenticated) {
    return <HomeRoute />;
  } else {
    return <LoginRoute />;
  }
}
Routes.propTypes = {
  isUserAuthenticated: PropTypes.bool,
};
