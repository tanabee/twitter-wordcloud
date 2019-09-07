import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from 'util/config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp(config);

export default function FirebaseAuth() {
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.TwitterAuthProvider.PROVIDER_ID],
    signInSuccessUrl: '/',
    callbacks: {
      signInSuccessWithAuthResult: result => {
        const {additionalUserInfo, credential} = result;
        if (
          additionalUserInfo &&
          credential &&
          credential.providerId ===
            firebase.auth.TwitterAuthProvider.PROVIDER_ID
        ) {
          console.log('userinfo', additionalUserInfo);
          console.log('credential', credential);
          localStorage.setItem('USER_INFO', additionalUserInfo);
          localStorage.setItem('CREDENTIAL', credential);
        }
        return true;
      },
    },
  };
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}
