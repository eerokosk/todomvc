import * as types from '../constants/TodoTypes'

const initialState = []

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.GET_TODOS:
      return action.todos;

    case types.ADD_TODO:
      return [...state, action.todo]

    case types.DELETE_TODO:
      return state.filter(todo =>
        todo._id !== action.todo._id
      )

    case types.UPDATE_TODO:
      return state.map(todo =>
        todo._id === action.todo._id ?
          Object.assign({}, todo) : todo
      )

    default:
      return state
  }
}
