import * as types from '../types/posts'
/**
 * Initial state of posts
 */
const initialState = {
  cachedPosts: [],
  requestInProgress: false,
  requestProcessed: false,
  error: null,
}
/**
 * postsReducer handles the state update
 * catches the action by correct type and returns a new state
 * state should always be immutable.
 * For better control on immutability we can see https://immutable-js.github.io/immutable-js/
 */
const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_POSTS:
    case types.CREATE_POST:
      return {
        ...state,
        requestInProgress: true,
        error: null,
        requestProcessed: false,
      }
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        cachedPosts: payload.data,
        requestProcessed: true,
        requestInProgress: false,
        error: null,
      }
    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        cachedPosts: [
          payload.data,
          ...state.cachedPosts,
        ] /** should be [...state.cachedPosts, payload.data] in general */,
        requestProcessed: true,
        requestInProgress: false,
        error: null,
      }
    case types.FETCH_POSTS_FAILED:
    case types.CREATE_POST_FAILED:
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

export default postsReducer
