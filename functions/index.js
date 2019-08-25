const functions = require('firebase-functions');
const Twitter = require('twitter');

exports.getTweets = functions.https.onCall((data, context) => {
  const client = new Twitter({
    consumer_key: functions.config().twitter.key,
    consumer_secret: functions.config().twitter.secret,
    access_token_key: data.credential.accessToken,
    access_token_secret: data.credential.secret,
  });
  const params = {screen_name: '_tanabee'};
  return client
    .get('statuses/user_timeline', params)
    .then(tweets => {
      return tweets;
    })
    .catch(error => {
      return error;
    });
});
