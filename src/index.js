import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import codePush from 'react-native-code-push';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

const Finca = () => {
  return (
    <NavigationContainer>
      <View>
        <Text style={{fontFamily: 'AvenirLTStd-Black'}}>My awesome font</Text>
        <Text style={{fontFamily: 'AvenirLTStd-Book'}}>My awesome font</Text>
        <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>My awesome font</Text>
        <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>My awesome font</Text>
        <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>My awesome font</Text>
        <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>My awesome font</Text>
        <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>My awesome font</Text>
        <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>My awesome font</Text>
        <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>My awesome font</Text>
      </View>
    </NavigationContainer>
  );
};

export default codePush(codePushOptions)(Finca);
