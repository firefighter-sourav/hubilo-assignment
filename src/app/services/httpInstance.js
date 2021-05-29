import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(async (options) => {
  return options
})

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
