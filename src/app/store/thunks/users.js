import { fetchUsers } from 'api/users'

import {
  fetchUsersFailed,
  fetchUsersStart,
  fetchUsersSuccess,
} from '../actions/users'

export const fetchUsersHandler = () => {
  return (dispatch) => {
    dispatch(fetchUsersStart())
    fetchUsers()
      .then((data) => dispatch(fetchUsersSuccess(data)))
      .catch((error) => dispatch(fetchUsersFailed(error)))
  }
}
