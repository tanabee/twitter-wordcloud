import React, {useEffect, useState} from 'react';
import {getTweet} from 'utils/ApiRequest';

export default function Main(props) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('USER_INFO'));
    const credential = JSON.parse(localStorage.getItem('CREDENTIAL'));
    console.log(userInfo, credential);
    getTweet(credential, userInfo.profile.screen_name)
      .then(result => {
        console.log('result: ', result);
        setTweets(result.data);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }, []);

  return <div>main page</div>;
}
