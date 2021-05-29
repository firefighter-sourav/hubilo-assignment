import PropTypes from 'prop-types'
import React from 'react'

import * as Styles from './styles'

/**
 * Generic Button to use in all the places through out the website
 * Pass onClick function to handle button click
 */
const Button = (props) => {
  const { children, onClick } = props
  return (
    <Styles.Wrapper data-testid="config-button" onClick={onClick}>
      {children}
    </Styles.Wrapper>
  )
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}
Button.defaultProps = {}
export default Button
