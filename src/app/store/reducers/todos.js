import * as types from '../types/todos'
/**
 * Initial state of todos
 */
const initialState = {
  cachedTodos: [],
  requestInProgress: false,
  requestProcessed: false,
  error: null,
}
/**
 * todosReducer handles the state update of all post related actions
 * catches the action by correct type and returns a new state
 * state should always be immutable.
 * For better control on immutability we can refer to https://immutable-js.github.io/immutable-js/
 */
const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_TODOS:
      return {
        ...state,
        requestInProgress: true,
        error: null,
        requestProcessed: false,
      }
    case types.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        cachedTodos: payload.data,
        requestProcessed: true,
        requestInProgress: false,
        error: null,
      }
    case types.FETCH_TODOS_FAILED:
      return {
        ...state,
        requestInProgress: false,
        requestProcessed: true,
        error: payload.error,
      }
    default:
      return state
  }
}

export default todosReducer
