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
