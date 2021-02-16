import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import is from 'is_js';

const initialState = {
  firebaseAuth: {
    isUserAuthenticated: false,
    userDetails: undefined,
  },
};

const authenticationPersistConfig = {
  key: 'authentication',
  storage: AsyncStorage,
  blacklist: [],
};

const authenticationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      if (is.existy(action.payload) && is.existy(action.type)) {
        if (action.type.split('.')[0] === 'authentication') {
          return {...state, ...action.payload};
        } else {
          return state;
        }
      } else {
        return state;
      }
  }
};

export default persistReducer(
  authenticationPersistConfig,
  authenticationReducer,
);
