import PropTypes from 'prop-types'
import React from 'react'

import * as Styles from './styles'
const RestrictedAccess = (props) => {
  const { children } = props
  return <Styles.Wrapper>{children}</Styles.Wrapper>
}
RestrictedAccess.propTypes = {
  children: PropTypes.node.isRequired,
}
RestrictedAccess.defaultProps = {}
export default RestrictedAccess
