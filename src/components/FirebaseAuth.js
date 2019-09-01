import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import config from 'util/config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp(config);

export default function FirebaseAuth(props) {
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.TwitterAuthProvider.PROVIDER_ID],
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
          var getTweets = firebase.functions().httpsCallable('getTweets');
          getTweets({
            credential: credential,
            userName: additionalUserInfo.profile.screen_name,
          })
            .then(result => {
              //console.log('result: ', result);
              props.onFetchedTweets(result);
            })
            .catch(error => {
              console.log('error: ', error);
            });
        }
        return false;
      },
    },
  };
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}