import store from '..'
import { fetchTodosHandler } from '../thunks/todos'
/**
 * Dispatch fetchTodosDispatch thunk
 * Alternative approach could be useDispatch(fetchTodosDispatch()) from the component itself
 * or by any custom hook
 */
export const fetchTodosDispatch = () => {
  store.dispatch(fetchTodosHandler())
}
