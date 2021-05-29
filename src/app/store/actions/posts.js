import * as types from '../types/posts'

export const fetchPostsStart = () => {
  return {
    type: types.FETCH_POSTS,
  }
}

export const fetchPostsSuccess = (data) => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: {
      data,
    },
  }
}

export const fetchPostsFailed = (error) => {
  return {
    type: types.FETCH_POSTS_FAILED,
    payload: {
      error,
    },
  }
}

export const createPostStart = () => {
  return {
    type: types.CREATE_POST,
  }
}

export const createPostSuccess = (data) => {
  return {
    type: types.CREATE_POST_SUCCESS,
    payload: {
      data,
    },
  }
}

export const createPostFailed = (error) => {
  return {
    type: types.CREATE_POST_FAILED,
    payload: {
      error,
    },
  }
}
