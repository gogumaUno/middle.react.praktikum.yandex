import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import { App } from './components/Core/App/App';

import { history } from './helpers/history';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
