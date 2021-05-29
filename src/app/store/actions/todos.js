import * as types from '../types/todos'

export const fetchTodosStart = () => {
  return {
    type: types.FETCH_TODOS,
  }
}

export const fetchTodosSuccess = (data) => {
  return {
    type: types.FETCH_TODOS_SUCCESS,
    payload: {
      data,
    },
  }
}

export const fetchTodosFailed = (error) => {
  return {
    type: types.FETCH_TODOS_FAILED,
    payload: {
      error,
    },
  }
}
