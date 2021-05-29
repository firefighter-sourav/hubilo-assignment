import { useEffect } from 'react'

/**
 * Fire action if clicked outside of the target div
 *
 * @param {ref} ref of the targetted div. any click outside of it will trigger the callback action
 * @param {function} action the action that will be called
 */
function useOutsideAlerter(ref, action) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        action()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export default useOutsideAlerter
