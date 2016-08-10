import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// App Reducers
import todoReducer from './reducers/todo';
import filterReducer from './reducers/filter';

// Combine Reducers
var reducers = combineReducers({
  filterReducer: filterReducer,
  todoReducer: todoReducer
});

// Create Store
var store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
