import { ALBUMS_URL } from 'app/configs/urls'
import { get, post } from 'app/services/httpInstance'
/**
 * Fetch albums from the api
 *
 * @returns {array} albums
 */
export const fetchAlbums = async () => {
  try {
    const response = await get(ALBUMS_URL)
    return response.data
  } catch (e) {
    console.log(e)
    throw e
  }
}

/**
 * Create album using the post api
 * @param {object} data
 * @returns {object} albums
 */
export const createAlbum = async (data) => {
  try {
    const response = await post(ALBUMS_URL, data)
    return response.data
  } catch (e) {
    console.log(e)
    throw e
  }
}
