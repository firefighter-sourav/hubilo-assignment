import { createPost, fetchPosts } from 'api/posts'

import {
  createPostFailed,
  createPostStart,
  createPostSuccess,
  fetchPostsFailed,
  fetchPostsStart,
  fetchPostsSuccess,
} from '../actions/posts'
/**
 * Thunk fetchPostsHandler
 * Calls the fetch posts api
 * Receives 100 posts entries
 * On Success/Failure
 *  updates the store
 */
export const fetchPostsHandler = () => {
  return (dispatch) => {
    dispatch(fetchPostsStart())
    fetchPosts()
      .then((data) => dispatch(fetchPostsSuccess(data)))
      .catch((error) => dispatch(fetchPostsFailed(error)))
  }
}
/**
 * Thunk createPostHandler
 * Calls the create post api with data
 * Receives 1 post which we just created
 * On Success/Failure
 *  updates the store
 */
export const createPostHandler = (saveData) => {
  return (dispatch) => {
    dispatch(createPostStart())
    createPost(saveData)
      .then((data) => dispatch(createPostSuccess(data)))
      .catch((error) => dispatch(createPostFailed(error)))
  }
}
