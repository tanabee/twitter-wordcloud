import React, {useEffect, useState} from 'react';
import {getTweets} from 'utils/ApiRequest';
import kuromoji from 'kuromoji';

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
        const text = '親譲りの無鉄砲で小供の時から損ばかりしている';
        kuromoji.builder({}).build((err, tokenizer) => {
          if (err) {
            console.log(err);
          } else {
            const tokens = tokenizer.tokenize(text);
            console.log(tokens);
          }
        });
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }, []);

  return <div>main page</div>;
}
