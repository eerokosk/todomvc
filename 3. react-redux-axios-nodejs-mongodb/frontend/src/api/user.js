import axios from 'axios';
import store from 'src/store';

export function getUsers() {
    return axios.get('http://localhost:8000/api/todos').then(function(response) {

        store.dispatch({
            type: 'GET_USERS',
            users: response.data
        })

        return response;

    }).catch(function(err) {
        console.error(err);
    });
}
