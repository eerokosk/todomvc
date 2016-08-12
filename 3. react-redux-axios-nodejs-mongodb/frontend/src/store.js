import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// App Reducers
import { routerReducer } from 'react-router-redux';
import todosReducer from './reducers/todos';

// Combine Reducers
var reducers = combineReducers({
  routing: routerReducer,
  todos: todosReducer
});

// Create Store
var store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
