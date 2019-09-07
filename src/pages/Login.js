import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FirebaseAuth from 'components/FirebaseAuth';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  image: {
    width: '400px',
    maxWidth: '100%',
  },
}));

export default function Login(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src="/images/wordcloud.jpg"
        alt="Twitter WordCloud"
      />
      <FirebaseAuth onFetchedTweets={props.onFetchedTweets} />
    </div>
  );
}
