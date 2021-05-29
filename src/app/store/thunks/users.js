import { fetchUsers } from 'api/users'

import {
  fetchUsersFailed,
  fetchUsersStart,
  fetchUsersSuccess,
} from '../actions/users'

/**
 * Thunk fetchUsersHandler
 * Calls the fetch users api
 * Receives 100 users entries
 * On Success/Failure
 *  updates the store
 */
export const fetchUsersHandler = () => {
  return (dispatch) => {
    dispatch(fetchUsersStart())
    fetchUsers()
      .then((data) => dispatch(fetchUsersSuccess(data)))
      .catch((error) => dispatch(fetchUsersFailed(error)))
  }
}
