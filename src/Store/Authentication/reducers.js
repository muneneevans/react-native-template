import * as actionTypes from './actionTypes';
import * as processTypes from '../Shared/processTypes';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  _backgroundLoginProcess: {status: processTypes.IDLE, attempts: 0},
  _loginProcess: {status: processTypes.IDLE},
  auth: {
    isUserAuthenticated: false,
    token: undefined,
  },
  userDetails: undefined,
  credentials: undefined,
};

const authenticationPersistConfig = {
  key: 'authentication',
  storage: AsyncStorage,
  blacklist: ['_loginProcess', '_backgroundLoginProcess'],
};

const authenticationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //#region LOG_IN
    case actionTypes.LOG_IN_REQUESTED:
      return {
        ...state,
        _loginProcess: {status: processTypes.PROCESSING},
      };
    case actionTypes.LOG_IN_SUCCEEDED:
      return {
        ...state,
        _loginProcess: {status: processTypes.SUCCESS},
        userDetails: action.payload.userDetails,
        auth: {
          isUserAuthenticated: true,
          token: action.payload.userDetails.token,
        },
        credentials: action.payload.credentials,
      };
    case actionTypes.LOG_IN_FAILED:
      return {
        ...state,
        _loginProcess: {
          status: processTypes.ERROR,
          error: action.payload.error,
        },
      };
    case actionTypes.LOG_IN_RESET: {
      return {
        ...state,
        _loginProcess: {status: processTypes.IDLE},
      };
    }
    //#endregion

    //#region BACKGROUND_LOG_IN
    case actionTypes.BACKGROUND_LOG_IN_REQUESTED:
      return {
        ...state,
        _backgroundLoginProcess: {
          ...state._backgroundLoginProcess,
          status: processTypes.PROCESSING,
        },
      };
    case actionTypes.BACKGROUND_LOG_IN_SUCCEEDED:
      return {
        ...state,
        _backgroundLoginProcess: {
          ...state._backgroundLoginProcess,
          status: processTypes.SUCCESS,
          attempts: 0,
        },
        auth: {
          isUserAuthenticated: true,
          token: action.payload.token,
        },
        userDetails: action.payload.userDetails,
      };
    case actionTypes.BACKGROUND_LOG_IN_FAILED:
      return {
        ...state,
        _backgroundLoginProcess: {
          ...state._backgroundLoginProcess,
          attempts: state._backgroundLoginProcess.attempts + 1,
          status: processTypes.ERROR,
          error: action.payload.error,
        },
      };
    case actionTypes.BACKGROUND_LOG_IN_RESET: {
      return {
        ...state,
        _backgroundLoginProcess: {status: processTypes.IDLE},
      };
    }
    case actionTypes.BACKGROUND_LOG_IN_SIGNOUT: {
      return {
        ...state,
        _backgroundLoginProcess: {status: processTypes.IDLE},
        auth: {
          isUserAuthenticated: false,
          token: undefined,
        },
      };
    }

    case actionTypes.LOG_OUT_SUCCEEDED:
      return initialState;
    //#endregion

    default:
      return state;
  }
};

export default persistReducer(
  authenticationPersistConfig,
  authenticationReducer,
);
