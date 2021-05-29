import React, { useState } from 'react'

import BaseFields from './BaseFields'

import Button from '../Button'
import Modal from '../Modal'
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
