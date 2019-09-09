import React, {useEffect, useState} from 'react';
import {getTweets} from 'utils/ApiRequest';
import {wordCount} from 'utils/WordCount';

export default function Main(props) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('USER_INFO'));
    const credential = JSON.parse(localStorage.getItem('CREDENTIAL'));
    getTweets(credential, userInfo.profile.screen_name)
      .then(result => wordCount(result.data))
      .then(words => {
        console.log(words);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }, []);

  return <div>main page</div>;
}
