import _ from 'underscore';
import store from '../store';

var todoInitialState = {
  todos: [],
  newTodo: ''
};

export default function(state = todoInitialState, action) {
  switch(action.type) {

    case 'FILTER_TODOS':
      var newState = Object.assign({}, state);
      newState.todos = _.where(newState.todos, {completed: store.getState().filterReducer.filter});
      return newState;

    case 'GET_TODOS':
      return Object.assign({}, state, {
        todos: action.todos
      });

    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          action.todo
        ],
        newTodo: ''
      });

    case 'SUBMIT_TODO':
      return Object.assign({}, state, {
        newTodo: action.newTodo
      });

    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (todo._id === action.todo._id) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        })
      });

    case 'DELETE_TODO':
      var newState = Object.assign({}, state);
      newState.todos = _.without(newState.todos, action.todo);
      return newState;

    default:
      return state;
  }
}
