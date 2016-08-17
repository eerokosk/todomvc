import * as TodoTypes from '../constants/TodoTypes'
import * as Utils from 'src/modules/utils';
import * as Api from '../api/todos'

export function getTodosSync(todos) {
  return { type: TodoTypes.GET_TODOS, todos }
}

export function addTodoSync(todo) {
  return { type: TodoTypes.ADD_TODO, todo }
}

export function deleteTodoSync(todo) {
  return { type: TodoTypes.DELETE_TODO, todo }
}

export function updateTodoSync(todo, merge) {
  return { type: TodoTypes.UPDATE_TODO, todo, merge }
}

export function getTodos(callback) {
  return function (dispatch) {
    return Api.getTodos(Utils.filter()).then(
      todos => {
        dispatch(getTodosSync(todos));
        if (typeof callback === 'function') callback(todos);
      },
      error => console.log(error)
    );
  }
}

export function addTodo(text, callback) {
  return function (dispatch) {
    return Api.addTodo(text).then(
      todo => {
        dispatch(addTodoSync(todo));
        if (typeof callback === 'function') callback(todo);
      },
      error => console.log(error)
    );
  };
}

export function deleteTodo(todo, callback) {
  return function (dispatch) {
    return Api.deleteTodo(todo).then(
      todo => {
        dispatch(deleteTodoSync(todo));
        if (typeof callback === 'function') callback(todo);
      },
      error => console.log(error)
    );
  };
}

export function updateTodo(todo, merge, callback) {
  return function (dispatch) {
    return Api.updateTodo(Object.assign({}, todo, merge)).then(
      todo => {
        dispatch(updateTodoSync(todo, merge));
        if (typeof callback === 'function') callback(todo);
      },
      error => console.log(error)
    );
  };
}
