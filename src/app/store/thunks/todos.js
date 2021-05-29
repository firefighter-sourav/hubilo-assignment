import { fetchTodos } from 'api/todos'

import {
  fetchTodosFailed,
  fetchTodosStart,
  fetchTodosSuccess,
} from '../actions/todos'
/**
 * Thunk fetchTodosHandler
 * Calls the fetch todos api
 * Receives 100 todos entries
 * On Success/Failure
 *  updates the store
 */
export const fetchTodosHandler = () => {
  return (dispatch) => {
    dispatch(fetchTodosStart())
    fetchTodos()
      .then((data) => dispatch(fetchTodosSuccess(data)))
      .catch((error) => dispatch(fetchTodosFailed(error)))
  }
}
