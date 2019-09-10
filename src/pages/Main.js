import React, {useEffect, useState} from 'react';
import ReactWordcloud from 'react-wordcloud';
import {getTweets} from 'utils/ApiRequest';
import {wordCount} from 'utils/WordCount';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  wordcloud: {
    width: '400px',
    margin: 'auto',
  },
  progress: {
    position: 'absolute',
    margin: 'auto',
    width: '40px',
    height: '40px',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
  },
}));

export default function Main(props) {
  const [words, setWords] = useState([]);
  const classes = useStyles();

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

  return words.length > 0 ? (
    <div className={classes.wordcloud}>
      <ReactWordcloud
        options={{
          fontWeight: 'bold',
          rotations: 2,
          rotationAngles: [0, 90],
          scale: 'log',
        }}
        words={words}
        size={[400, 400]}
      />
    </div>
  ) : (
    <CircularProgress className={classes.progress} />
  );
}
