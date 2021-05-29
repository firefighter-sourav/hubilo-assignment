import * as types from '../types/users'
/**
 * Initial state of users
 */
const initialState = {
  cachedUsers: [],
  requestInProgress: false,
  requestProcessed: false,
  error: null,
}
/**
 * usersReducer handles the state update of all post related actions
 * catches the action by correct type and returns a new state
 * state should always be immutable.
 * For better control on immutability we can refer to https://immutable-js.github.io/immutable-js/
 */
const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_USERS:
      return {
        ...state,
        requestInProgress: true,
        error: null,
        requestProcessed: false,
      }
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        cachedUsers: payload.data,
        requestProcessed: true,
        requestInProgress: false,
        error: null,
      }
    case types.FETCH_USERS_FAILED:
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

export default usersReducer
