import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function componentName() {
  return (
    <NavigationContainer>
      <View>
        <Text style={{fontFamily: 'AvenirLTStd-Black'}}>My awesome font</Text>
        <Text style={{fontFamily: 'AvenirLTStd-Book'}}>My awesome font</Text>
        <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>My awesome font</Text>
        <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>My awesome font</Text>
      </View>
    </NavigationContainer>
  );
}
