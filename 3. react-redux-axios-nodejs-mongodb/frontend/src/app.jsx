// TodoMVC styles
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

// layouts
import Index from 'src/layouts/index.jsx';
import Page from 'src/layouts/page.jsx';

// components
import Home from 'src/components/home.jsx';
import WidgetContainer from 'src/containers/widget';
import UsersContainer from 'src/containers/users';

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Index}>
        <Route path="/" component={Home} />
      </Route>
      <Route component={Page}>
        <Route path="/widgets" component={WidgetContainer} />
        <Route path="/users" component={UsersContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
