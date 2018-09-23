import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/css/material-dashboard-react.css?v=1.5.0';

import App from 'layouts/Dashboard/App.jsx';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
