import React, {useEffect, useState} from 'react';
import ReactWordcloud from 'react-wordcloud';
import {getTweets} from 'utils/ApiRequest';
import {wordCount} from 'utils/WordCount';

export default function Main(props) {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('USER_INFO'));
    const credential = JSON.parse(localStorage.getItem('CREDENTIAL'));
    getTweets(credential, userInfo.profile.screen_name)
      .then(result => wordCount(result.data))
      .then(words => {
        console.log(words);
        setWords(words);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }, []);

  return (
    <ReactWordcloud
      options={{
        fontWeight: 'bold',
        rotations: 2,
        rotationAngles: [0, 90],
        scale: 'log',
      }}
      words={words}
    />
  );
}
