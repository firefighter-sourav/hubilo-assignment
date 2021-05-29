import Swal from 'sweetalert2'
/**
 * Common helper functions here
 */

/**
 * Checks if the passed variable is empty or not.
 * Works with object and array also
 * @param {*} params
 * @param {string} condition either of ('and', 'or', 'all', 'any')
 * @returns bool
 * Examples:
 * var false_value = 0/null/false/undefined/''
 * -> isNullOrEmpty(a) // true
 * var name_phone_empty = {name: '',  phone: ''}
 * -> isNullOrEmpty(name_phone_empty, 'all') // true
 * -> isNullOrEmpty(name_phone_empty, 'any') // true
 * var name_empty = {name: '', phone: '99876473934'}
 * -> isNullOrEmpty(name_empty, 'all') // false
 * -> isNullOrEmpty(name_empty, 'any') // true
 * var no_empty = {name: 'John', phone: '9876656748'}
 * -> isNullOrEmpty(no_empty, 'all') // false
 * -> isNullOrEmpty(no_empty, 'any') // false
 * var empty_elements_array = [null, false, 0, undefined, '']
 * -> isNullOrEmpty(empty_elements_array, 'all') //true
 * -> isNullOrEmpty(empty_elements_array, 'any') //true
 * var some_emnpty_elements_array = ["King", false, "Queen", 533]
 * -> isNullOrEmpty(some_emnpty_elements_array, 'all') //false
 * -> isNullOrEmpty(some_emnpty_elements_array, 'any') //true
 */
export function isNullOrEmpty(params, condition = 'or') {
  let isInvalid = false
  let counter = 0
  if (!params) return true
  if (condition === 'all') {
    condition = 'and'
  } else if (condition === 'any') {
    condition = 'or'
  }
  if (Array.isArray(params)) {
    if (params.length) {
      params.forEach((value, key) => {
        if (
          value === undefined ||
          value === null ||
          value === 0 ||
          value === false ||
          value.length === 0 ||
          value === ''
        ) {
          isInvalid = true
          counter++
        }
      })
    } else {
      isInvalid = true
    }
  } else if (
    params === undefined ||
    params === null ||
    params === '' ||
    params === 0 ||
    params === false ||
    params === []
  ) {
    isInvalid = true
  }
  if (Array.isArray(params) && condition === 'and') {
    if (counter === params.length) {
      return true
    }
    return false
  }
  if (typeof params === 'object') {
    counter = 0
    for (let key in params) {
      if (params[key] && params[key].length !== 0) {
        counter++
      }
    }
    if (condition === 'and') {
      if (counter === 0) {
        return true
      }
      return false
    } else {
      if (counter !== Object.keys(params).length) {
        // atleast one is empty
        return true
      }
      return false
    }
  }
  return isInvalid
}
/**
 * Sweetalert 2 toast mixin
 */
const SwalToast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})
/**
 * show toast with message
 *
 * @param {string} message
 * @param {string} type
 */
export const showToast = (message, type) => {
  SwalToast.fire({
    icon: type,
    title: message,
  })
}
