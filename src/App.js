import React from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import Login from 'pages/Login';
import Main from 'pages/Main';
import AppBar from 'components/AppBar';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

const PrivateRoute = ({component: Component, location, ...rest}) => {
  const credential = JSON.parse(localStorage.getItem('CREDENTIAL'));
  if (!credential) {
    return <Redirect to={{pathname: '/login'}} />;
  }

  return <Component {...rest} />;
};

export default App;
