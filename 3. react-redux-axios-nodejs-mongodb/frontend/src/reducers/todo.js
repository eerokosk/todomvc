var todoInitialState = {
  todos: []
};

export default function(state = todoInitialState, action) {
  switch(action.type) {
    case 'GET_TODOS':
      var newState = Object.assign({}, state);
      newState.todos = action.todos;
      return newState;

    default:
      return state;
  }
}
