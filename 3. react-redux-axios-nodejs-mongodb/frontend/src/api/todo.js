import axios from 'axios';
import store from 'src/store';

export function getTodos() {
  return axios.get('http://localhost:8000/api/todos').then(function(response) {

    store.dispatch({
      type: 'GET_TODOS',
      todos: response.data
    });

    return response;

  }).catch(function(err) {
    console.error(err);
  });
}

export function addTodo(newTodo) {
  return axios.post('http://localhost:8000/api/todos', {
    title: newTodo,
    order: 0
  }).then(function(response) {

    store.dispatch({
      type: 'ADD_TODO',
      todo: response.data
    });

    return response;

  }).catch(function(err) {
    console.error(err);
  });
}

export function toggleTodo(todo) {
  return axios.put('http://localhost:8000/api/todos/' + todo._id,
    Object.assign({}, todo, {
      completed: !todo.completed
    })
  ).then(function(response) {

    store.dispatch({
      type: 'TOGGLE_TODO',
      todo: todo
    });

    return response;

  }).catch(function(err) {
    console.error(err);
  });
}

export function deleteTodo(todo) {
  return axios.delete('http://localhost:8000/api/todos/' + todo._id).then(function(response) {

    store.dispatch({
      type: 'DELETE_TODO',
      todo: todo
    });

    return response;

  }).catch(function(err) {
    console.error(err);
  });
}
