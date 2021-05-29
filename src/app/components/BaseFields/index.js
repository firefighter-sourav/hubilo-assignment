import { startCase } from 'lodash'
import PropTypes from 'prop-types'
import React, { useCallback, useContext, useEffect, useState } from 'react'

import { isNullOrEmpty, showToast } from 'app/configs/utils'
import FieldsContext from 'app/contexts/FieldsContext'

import * as Styles from './styles'

import Button from '../Button'

/**
 * BaseFields is a seperate component from BaseInput because of formData
 * formData is state so updating will rerender the component including the modal
 * Updating the modal everytime just for input change is not efficient
 *
 */
const BaseFields = (props) => {
  const { closeModal } = props
  const [formData, setFormData] = useState({})
  const { fields, handleSubmit } = useContext(FieldsContext)

  useEffect(() => {
    let tempFormData = {}
    fields.map((field) => {
      tempFormData[field] = null
    })
    setFormData(tempFormData)
  }, [])

  const handleFormSubmit = useCallback(() => {
    if (isNullOrEmpty(formData)) {
      showToast('All Fields are required', 'warning')
      return
    }
    closeModal()
    handleSubmit(formData)
  }, [formData])

  const handleInputChange = (e) => {
    e.persist()
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Styles.Wrapper>
      {fields.map((name) => (
        <Styles.Row key={name}>
          <Styles.TextLabel>{startCase(name)}</Styles.TextLabel>
          <Styles.TextInput
            name={name}
            onKeyUp={handleInputChange}
            placeholder="Write Something..."
          />
        </Styles.Row>
      ))}

      <Styles.Footer>
        <Button onClick={handleFormSubmit}>Save</Button>
      </Styles.Footer>
    </Styles.Wrapper>
  )
}
BaseFields.propTypes = {
  closeModal: PropTypes.func.isRequired,
}
BaseFields.defaultProps = {}
export default BaseFields
