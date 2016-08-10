// TodoMVC styles
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

// layouts
import IndexLayout from 'src/layouts/index.jsx';

// components
import AppComponent from 'src/components/app.jsx';

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={IndexLayout}>
        <Route path="/" component={AppComponent} />
        <Route path="/active" component={AppComponent} />
        <Route path="/completed" component={AppComponent} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
