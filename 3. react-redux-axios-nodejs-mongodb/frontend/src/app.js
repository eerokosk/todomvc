// TodoMVC styles
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

// layouts
import IndexLayout from 'src/layouts/index.js';

// containers
import AppContainer from 'src/containers/app.js';

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={IndexLayout}>
        <Route path="/" component={AppContainer} />
        <Route path="/active" component={AppContainer} />
        <Route path="/completed" component={AppContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
