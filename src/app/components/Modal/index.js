import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ModalComponent from 'react-modal'

import Cross from 'assets/images/Cross.svg'

import * as Styles from './styles'

ModalComponent.setAppElement('body')
/**
 * Generic Modal Wrapper made on top of react-modal
 * Accepts title and generic content styles
 */
const Modal = (props) => {
  return (
    <ModalComponent
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={{
        content: {
          ...Styles.modalContent,
          ...props.styles?.content,
        },
        overlay: {
          ...Styles.modalOverlay,
          ...props.styles?.overlay,
        },
      }}
    >
      {props.showCloseIcon && (
        <Styles.CloseIconWrapper onClick={props.closeModal}>
          <Styles.Cross src={Cross}></Styles.Cross>
        </Styles.CloseIconWrapper>
      )}

      <Styles.ClearFix />
      <Styles.Content {...props.styles?.content}>
        {props.title ? (
          <Styles.TitleBox
            styles={props.styles.title}
            subTitle={props.subTitle}
          >
            {props.title}
          </Styles.TitleBox>
        ) : null}
        {props.subTitle ? (
          <Styles.SubTitle>{props.subTitle}</Styles.SubTitle>
        ) : null}
        {props.children}
      </Styles.Content>
    </ModalComponent>
  )
}

export default memo(Modal)

Modal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  showCloseIcon: PropTypes.bool,
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
}
Modal.defaultProps = {
  showCloseIcon: true,
  styles: {
    content: {},
    overlay: {},
  },
}
