import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from 'pages/Login';
import Main from 'pages/Main';

function App() {
  const [tweets, setTweets] = useState([]);

  const onFetchedTweets = fetchedTweets => {
    console.log(fetchedTweets);
    setTweets(fetchedTweets);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
