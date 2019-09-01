import React, {useState} from 'react';
import FirebaseAuth from 'components/FirebaseAuth';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
}));

function App() {
  const [tweets, setTweets] = useState([]);
  const classes = useStyles();

  const onFetchedTweets = tweets => {
    console.log(tweets);
    setTweets(tweets);
  };

  return (
    <div className={classes.root}>
      <img src="/images/wordcloud.jpg" title="Twitter WordCloud" />
      <FirebaseAuth onFetchedTweets={onFetchedTweets} />
    </div>
  );
}

export default App;
