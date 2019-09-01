import React, {useState} from 'react';
import FirebaseAuth from 'components/FirebaseAuth';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  image: {
    width: '400px',
    maxWidth: '100%',
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
      <img
        className={classes.image}
        src="/images/wordcloud.jpg"
        title="Twitter WordCloud"
      />
      <FirebaseAuth onFetchedTweets={onFetchedTweets} />
    </div>
  );
}

export default App;
