import store from '..'
import { fetchTodosHandler } from '../thunks/todos'

export const fetchTodosDispatch = () => {
  store.dispatch(fetchTodosHandler())
}
