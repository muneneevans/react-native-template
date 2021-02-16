//#region firebase auth
export const getFirebaseAuth = ({auth}) => auth.firebaseAuth;
export const getIsFirebaseUserAuthenticated = ({auth}) =>
  auth.firebaseAuth.isUserAuthenticated;
export const getFirebaseUserDetails = ({auth}) => auth.firebaseAuth.userDetails;
//#endregion
