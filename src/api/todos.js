import { TODOS_URL } from 'app/configs/urls'
import { get } from 'app/services/httpInstance'
/**
 * fetch todos from the api
 *
 * @returns {array} todos
 */
export const fetchTodos = async () => {
  try {
    const response = await get(TODOS_URL)
    return response.data
  } catch (e) {
    console.log(e)
    throw e
  }
}
