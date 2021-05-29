import store from '..'
import { createPostHandler, fetchPostsHandler } from '../thunks/posts'
/**
 * Dispatch fetchPostsHandler thunk
 * Alternative approach could be useDispatch(fetchPostsHandler()) from the component itself
 * or by any custom hook
 */
export const fetchPostsDispatch = () => {
  store.dispatch(fetchPostsHandler())
}
/**
 * Dispatch createPostHandler thunk
 * Calls the api with data and on success/error updates the store
 */
export const createPostDispatch = (data) => {
  store.dispatch(createPostHandler(data))
}
