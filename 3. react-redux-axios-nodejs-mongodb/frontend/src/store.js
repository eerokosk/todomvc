import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// App Reducers
import todos from './reducers/todos';
import filter from './reducers/filter';

// Combine Reducers
var reducers = combineReducers({
  filter: filter,
  todos: todos
});

// Create Store
var store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
