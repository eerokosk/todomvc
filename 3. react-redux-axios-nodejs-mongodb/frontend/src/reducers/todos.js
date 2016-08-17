import * as TodoTypes from '../constants/TodoTypes'

const initialState = []

export default function todos(state = initialState, action) {
  switch (action.type) {
    case TodoTypes.GET_TODOS:
      return action.todos;

    case TodoTypes.ADD_TODO:
      return [...state, action.todo]

    case TodoTypes.DELETE_TODO:
      return state.filter(todo =>
        todo._id !== action.todo._id
      )

    case TodoTypes.UPDATE_TODO:
      return state.map(todo =>
        todo._id === action.todo._id ?
          Object.assign({}, todo, action.merge) : todo
      )

    default:
      return state
  }
}
