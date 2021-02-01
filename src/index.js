import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store, {persistor} from 'store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import codePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';

import LoadingPage from 'pages/LoadingPage';
let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

const onBeforeLift = () => ({});
class Finca extends React.Component{

  componentDidMount() {
    SplashScreen.hide()
  }
  
  render(){
    return(
    <Provider store={store}>
      <PersistGate
        onBeforeLift={onBeforeLift}
        loading={null }
        persistor={persistor}>
      </PersistGate>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <NavigationContainer>
            <View>
              <Text style={{fontFamily: 'AvenirLTStd-Black'}}>
                My awesome font
              </Text>
              <Text style={{fontFamily: 'AvenirLTStd-Book'}}>
                My awesome font
              </Text>
              <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>
                My awesome font
              </Text>
              <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>
                My awesome font
              </Text>
              <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>
                My awesome font
              </Text>
              <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>
                My awesome font
              </Text>
              <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>
                My awesome font
              </Text>
              <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>
                My awesome font
              </Text>
              <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>
                My awesome font
              </Text>
            </View>
          </NavigationContainer>
        </SafeAreaView>
    </Provider>
    )
  }
}

export default codePush(codePushOptions)(Finca);
