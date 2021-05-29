import store from '..'
import { fetchUsersHandler } from '../thunks/users'
/**
 * Dispatch fetchUsersHandler thunk
 * Alternative approach could be useDispatch(fetchUsersHandler()) from the component itself
 * or by any custom hook
 */
export const fetchUsersDispatch = () => {
  store.dispatch(fetchUsersHandler())
}
