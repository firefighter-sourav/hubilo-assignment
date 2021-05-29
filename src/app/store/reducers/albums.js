import * as types from '../types/albums'
/**
 * Initial state of albums
 */
const initialState = {
  cachedAlbums: [],
  requestInProgress: false,
  requestProcessed: false,
  error: null,
}
/**
 * albumsReducer handles the state update of all post related actions
 * catches the action by correct type and returns a new state
 * state should always be immutable.
 * For better control on immutability we can refer to https://immutable-js.github.io/immutable-js/
 */
const albumsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_ALBUMS:
    case types.CREATE_ALBUMS:
      return {
        ...state,
        requestInProgress: true,
        error: null,
        requestProcessed: false,
      }
    case types.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        cachedAlbums: payload.data,
        requestProcessed: true,
        requestInProgress: false,
        error: null,
      }
    case types.CREATE_ALBUMS_SUCCESS:
      return {
        ...state,
        cachedAlbums: [
          payload.data,
          ...state.cachedAlbums,
        ] /** should be [...state.cachedAlbums, payload.data] in general */,
        requestProcessed: true,
        requestInProgress: false,
        error: null,
      }
    case types.FETCH_ALBUMS_FAILED:
    case types.CREATE_ALBUMS_FAILED:
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

export default albumsReducer
