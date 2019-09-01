import React, {useState} from 'react';
import FirebaseAuth from 'components/FirebaseAuth';

function App() {
  const [tweets, setTweets] = useState([]);

  const onFetchedTweets = tweets => {
    console.log(tweets);
    setTweets(tweets);
  };

  return <FirebaseAuth onFetchedTweets={onFetchedTweets} />;
}

export default App;
