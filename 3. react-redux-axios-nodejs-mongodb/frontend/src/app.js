// TodoMVC styles
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';
import { syncHistoryWithStore } from 'react-router-redux'

// layouts
import IndexLayout from 'src/layouts/index.js';

// containers
import AppContainer from 'src/containers/app.js';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route component={IndexLayout}>
        <Route path="/" component={AppContainer} />
        <Route path="/active" component={AppContainer} />
        <Route path="/completed" component={AppContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
