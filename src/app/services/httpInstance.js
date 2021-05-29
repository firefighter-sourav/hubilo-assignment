import axios from 'axios'

const axiosInstance = axios.create()
/**
 * Axios request interceptor to put auth token and all the header/body modification
 * can be done through this
 */
axiosInstance.interceptors.request.use(async (options) => {
  return options
})
/**
 * Axios response interceptor to handle any kind of success/error
 * This can be used log errors globally as this instance is being used
 * throughout the application
 */
axiosInstance.interceptors.response.use(
  (response) => {
    // validate get, create response here
    return response
  },
  (error) => {
    if (error.response) {
      // some server side error
      console.log('error in server response :- ', error.toJSON())
      if (error.response.status === 500) {
        console.error('Internal Server Error Occurred')
      } else if (error.response.status >= 400 && error.response.status < 500) {
        console.error('Something Went Wrong.')
      }
    } else if (error.request) {
      // request initiated but no response from server, most probably bcz of network error
      console.log('No Response Received :- ', error)
    } else {
      console.log(
        'Error occured because of something unexpected :- ',
        error.message
      )
    }

    return Promise.reject(error)
  }
)

export const get = async (url, options = {}) => {
  try {
    const response = await axiosInstance.get(url, options)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const post = async (url, data, options = {}) => {
  try {
    const response = await axiosInstance.post(url, data, options)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const patch = async (url, data, options = {}) => {
  try {
    const response = await axiosInstance.patch(url, data, options)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const put = async (url, data, options = {}) => {
  try {
    const response = await axiosInstance.put(url, data, options)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}
