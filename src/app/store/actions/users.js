import * as types from '../types/users'

export const fetchUsersStart = () => {
  return {
    type: types.FETCH_USERS,
  }
}

export const fetchUsersSuccess = (data) => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: {
      data,
    },
  }
}

export const fetchUsersFailed = (error) => {
  return {
    type: types.FETCH_USERS_FAILED,
    payload: {
      error,
    },
  }
}
