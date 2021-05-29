import store from '..'
import { createPostHandler, fetchPostsHandler } from '../thunks/posts'

export const fetchPostsDispatch = () => {
  store.dispatch(fetchPostsHandler())
}

export const createPostDispatch = (data) => {
  store.dispatch(createPostHandler(data))
}
