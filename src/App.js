import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from 'util/config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp(config);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    //firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: result => {
      const {additionalUserInfo, credential} = result;
      if (
        additionalUserInfo &&
        credential &&
        credential.providerId === firebase.auth.TwitterAuthProvider.PROVIDER_ID
      ) {
        console.log('Twitter user name=', additionalUserInfo.username);
      }
      return false;
    },
  },
};

function App() {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default App;
