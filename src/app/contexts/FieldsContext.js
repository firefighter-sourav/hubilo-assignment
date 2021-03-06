import { createContext } from 'react'
/**
 * BaseFields context used in BaseInput
 */
const FieldsContext = createContext({
  fields: [] /** array of field names */,
  handleSubmit:
    null /** a function that will be called on submit of the form */,
})
export default FieldsContext
