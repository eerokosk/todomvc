import axios from 'axios';
import store from 'src/store';

export function getTodos(filter) {
  return axios.get('http://localhost:8000/api/todos/' + filter).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

export function addTodo(text) {
  return axios.post('http://localhost:8000/api/todos', {
    text: text
  }).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

export function updateTodo(todo) {
  return axios.put('http://localhost:8000/api/todos/' + todo._id, todo).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

export function deleteTodo(todo) {
  return axios.delete('http://localhost:8000/api/todos/' + todo._id).then(function(response) {
    return todo;
  }).catch(function(err) {
    console.error(err);
  });
}
