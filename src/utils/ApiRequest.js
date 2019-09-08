import * as firebase from 'firebase/app';
import 'firebase/functions';

export function getTweets(credential, userName) {
  const getTweets = firebase.functions().httpsCallable('getTweets');
  return getTweets({
    credential: credential,
    userName: userName,
  });
}
