import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// App Reducers
import todoReducer from './reducers/todo';

// Combine Reducers
var reducers = combineReducers({
    todoReducer: todoReducer
});

// Create Store
var store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;
