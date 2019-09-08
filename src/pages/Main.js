import React, {useEffect, useState} from 'react';
import {getTweets} from 'utils/ApiRequest';
import {analyzeWithTweets} from 'utils/MorphologicalAnalyzer';

export default function Main(props) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('USER_INFO'));
    const credential = JSON.parse(localStorage.getItem('CREDENTIAL'));
    console.log(userInfo, credential);
    getTweets(credential, userInfo.profile.screen_name)
      .then(result => {
        console.log('result: ', result);
        setTweets(result.data);
        analyzeWithTweets(result.data);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }, []);

  return <div>main page</div>;
}
