import is from 'is_js';

//#region login
export const getLoginProcess = ({authentication}) =>
  authentication._loginProcess;
export const getAuth = ({authentication}) => authentication.auth;
export const getIsUserAuthenticated = ({authentication}) =>
  authentication.auth.isUserAuthenticated;
export const getAuthToken = ({authentication}) => authentication.auth.token;
//#endregion

//#region background login
export const getBackgroundLoginProcess = ({authentication}) =>
  authentication._backgroundLoginProcess;
export const getCredentials = ({authentication}) => authentication.credentials;
//#endregion

//#region user details
export const getUserDetails = ({authentication}) => authentication.userDetails;
export const getIsDriver = ({authentication}) =>
  is.existy(authentication.userDetails.driver);
export const getDriverDetails = ({authentication}) =>
  authentication.userDetails.driver;
//#endregion
