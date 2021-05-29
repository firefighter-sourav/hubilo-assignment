import { POSTS_URL } from 'app/configs/urls'
import { get, post } from 'app/services/httpInstance'
/**
 * Fetch array of 100 posts from the api
 *
 * @returns {array} posts
 */
export const fetchPosts = async () => {
  try {
    const response = await get(POSTS_URL)
    return response.data
  } catch (e) {
    console.log(e)
    throw e
  }
}

/**
 * Creates post using the post api
 *
 * @param {object} data
 * @returns {object} single post
 */

export const createPost = async (data) => {
  try {
    const response = await post(POSTS_URL, data)
    return response.data
  } catch (e) {
    console.log(e)
    throw e
  }
}
