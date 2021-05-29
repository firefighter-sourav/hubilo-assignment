import { fetchTodos } from 'api/todos'

import {
  fetchTodosFailed,
  fetchTodosStart,
  fetchTodosSuccess,
} from '../actions/todos'

export const fetchTodosHandler = () => {
  return (dispatch) => {
    dispatch(fetchTodosStart())
    fetchTodos()
      .then((data) => dispatch(fetchTodosSuccess(data)))
      .catch((error) => dispatch(fetchTodosFailed(error)))
  }
}
