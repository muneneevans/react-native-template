import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomePage from 'pages/WelcomePage';
import Login from 'pages/Login';
import OTP from 'pages/OTP';

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

export default function Routes() {
  return <LoginRoute />;
}
