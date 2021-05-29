import PropTypes from 'prop-types'
import React from 'react'

import * as Styles from './styles'
const NavPill = (props) => {
  const { path, disabled, showCount, count, label } = props
  return disabled ? (
    <Styles.StyledDiv>
      {showCount ? <Styles.CircleBadge>{count} </Styles.CircleBadge> : null}
      {label}
    </Styles.StyledDiv>
  ) : (
    <Styles.StyledLink to={path}>
      {showCount ? <Styles.CircleBadge>{count} </Styles.CircleBadge> : null}
      {label}
    </Styles.StyledLink>
  )
}
NavPill.propTypes = {
  path: PropTypes.string.isRequired,
  showCount: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}
NavPill.defaultProps = {
  disabled: false,
}
export default NavPill
