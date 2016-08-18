import React from 'react';

import { render } from 'react-dom';

import App from './components/App';
import Layout from './components/Layout';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Layout}></IndexRoute>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
