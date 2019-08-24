import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from 'util/config';

firebase.initializeApp(config);

function App() {
  return <div>test</div>;
}

export default App;
