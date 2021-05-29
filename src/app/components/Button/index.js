import PropTypes from 'prop-types'
import React from 'react'

import * as Styles from './styles'
const Button = (props) => {
  const { children, onClick } = props
  return <Styles.Wrapper onClick={onClick}>{children}</Styles.Wrapper>
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}
Button.defaultProps = {}
export default Button
