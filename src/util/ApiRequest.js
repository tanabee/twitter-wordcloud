import * as firebase from 'firebase/app';
import 'firebase/functions';

export function getTweet(credential, userName) {
  const getTweets = firebase.functions().httpsCallable('getTweets');
  return getTweets({
    credential: credential,
    userName: additionalUserInfo.profile.screen_name,
  });
  //.then(result => {
  //  //console.log('result: ', result);
  //  props.onFetchedTweets(result);
  //})
  //.catch(error => {
  //  console.log('error: ', error);
  //});
}
