import PropTypes from 'prop-types'
import React from 'react'

import * as Styles from './styles'
const NavOption = (props) => {
  const { path, isDisabled, children } = props
  return (
    <Styles.Option value={path} disabled={isDisabled}>
      {children}
    </Styles.Option>
  )
}
NavOption.propTypes = {
  path: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}
NavOption.defaultProps = {
  path: '',
  isDisabled: false,
}
export default NavOption
