import store from '..'
import { fetchUsersHandler } from '../thunks/users'

export const fetchUsersDispatch = () => {
  store.dispatch(fetchUsersHandler())
}
