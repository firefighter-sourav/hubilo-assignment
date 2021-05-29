import { USERS_URL } from 'app/configs/urls'
import { get } from 'app/services/httpInstance'
/**
 * Fetch Users from get api
 *
 * @returns {array} users
 */
export const fetchUsers = async () => {
  try {
    const response = await get(USERS_URL)
    return response.data
  } catch (e) {
    console.log(e)
    throw e
  }
}
