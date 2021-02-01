import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import WelcomePage from "pages/WelcomePage"

const Stack = createStackNavigator();

const LoginRoute = () => (
  <Stack.Navigator initialRouteName="WelcomePage" >
    <Stack.Screen 
        name="WelcomePage" 
        component={WelcomePage} 
        options={{
          headerShown: false
        }} 
    />
  </Stack.Navigator>
)


export default function Routes() {
  return (
    <LoginRoute />
  );
}
