import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from 'utils/config';
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
        if (additionalUserInfo && credential) {
          console.log('userinfo', additionalUserInfo);
          console.log('credential', credential);
          localStorage.setItem('USER_INFO', JSON.stringify(additionalUserInfo));
          localStorage.setItem('CREDENTIAL', JSON.stringify(credential));
        }
        return true;
      },
    },
  };
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}
