import * as actionTypes from './actionTypes';

//#region firebase login
export const firebaseLogin = (userDetails) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.FIREBASE_LOG_IN_SUCCEEDED,
      payload: {
        firebaseAuth: {
          isUserAuthenticated: true,
          userDetails: userDetails,
        },
      },
    });
  };
};
//#endregion
//#region firebase logout
export const firebaseLogout = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.FIREBASE_LOG_OUT_SUCCEEDED,
      payload: {
        firebaseAuth: {
          isUserAuthenticated: false,
          userDetails: null,
        },
      },
    });
  };
};
//#endregion
