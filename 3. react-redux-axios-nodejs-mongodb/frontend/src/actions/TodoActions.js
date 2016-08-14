import * as types from '../constants/TodoTypes'
import * as Api from '../api/todo'

export function getTodosSync(todos) {
  return { type: types.GET_TODOS, todos }
}

export function addTodoSync(todo) {
  return { type: types.ADD_TODO, todo }
}

export function deleteTodoSync(todo) {
  return { type: types.DELETE_TODO, todo }
}

export function updateTodoSync(todo) {
  return { type: types.UPDATE_TODO, todo }
}

export function getTodos(filter) {
  return function (dispatch) {
    return Api.getTodos(filter).then(
      todos => dispatch(getTodosSync(todos)),
      error => console.log(error)
    );
  }
}

export function addTodo(text) {
  return function (dispatch) {
    return Api.addTodo(text).then(
      todo => dispatch(addTodoSync(todo)),
      error => console.log(error)
    );
  };
}

export function deleteTodo(todo) {
  return function (dispatch) {
    return Api.deleteTodo(todo).then(
      todo => dispatch(deleteTodoSync(todo)),
      error => console.log(error)
    );
  };
}

export function updateTodo(todo) {
  return function (dispatch) {
    return Api.updateTodo(todo).then(
      todo => dispatch(updateTodoSync(todo)),
      error => console.log(error)
    );
  };
}
