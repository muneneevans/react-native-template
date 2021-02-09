import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store, {persistor} from 'store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import codePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};
import Routes from "pages/Routes"

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
            <Routes />
          </NavigationContainer>
        </SafeAreaView>
    </Provider>
    )
  }
}

export default codePush(codePushOptions)(Finca);
