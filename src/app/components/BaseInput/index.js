import React, { useState } from 'react'

import BaseFields from './BaseFields'

import Button from '../Button'
import Modal from '../Modal'
/**
 * BaseInput is the generic component for creating entries
 * A Button will be visible on the ui
 * onClick of the button modal will open
 * onSubmit of the modal form entries will be created
 * useContext hook is used for data passing
 */
const BaseInput = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add New</Button>
      <Modal
        modalIsOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        title="Create new entry"
      >
        <BaseFields closeModal={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}
export default BaseInput
