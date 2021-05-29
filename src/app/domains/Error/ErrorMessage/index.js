import PropTypes from 'prop-types'
import React from 'react'

import * as Styles from './styles'
const ErrorMessage = (props) => {
  const { children } = props
  return <Styles.Wrapper>{children}</Styles.Wrapper>
}
ErrorMessage.propTypes = {
  children: PropTypes.node,
}
ErrorMessage.defaultProps = {}
export default ErrorMessage
