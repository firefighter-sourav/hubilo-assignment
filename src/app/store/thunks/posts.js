import { createPost, fetchPosts } from 'api/posts'

import {
  createPostFailed,
  createPostStart,
  createPostSuccess,
  fetchPostsFailed,
  fetchPostsStart,
  fetchPostsSuccess,
} from '../actions/posts'

export const fetchPostsHandler = () => {
  return (dispatch) => {
    dispatch(fetchPostsStart())
    fetchPosts()
      .then((data) => dispatch(fetchPostsSuccess(data)))
      .catch((error) => dispatch(fetchPostsFailed(error)))
  }
}

export const createPostHandler = (saveData) => {
  return (dispatch) => {
    dispatch(createPostStart())
    createPost(saveData)
      .then((data) => dispatch(createPostSuccess(data)))
      .catch((error) => dispatch(createPostFailed(error)))
  }
}
