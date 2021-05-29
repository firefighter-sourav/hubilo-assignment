import React, { useRef, useState } from 'react'

import { Icon } from 'app/configs/commonStyles'
import useOutsideAlerter from 'app/hooks/useOutsideAlerter'
import { _albums } from 'app/store/selectors/albums'
import { _todos } from 'app/store/selectors/todos'
import { _users } from 'app/store/selectors/users'
import DownArrow from 'assets/images/DownArrow.svg'

import * as Styles from './styles'

import TodosNavItem from '../TodosNavItem'
import UsersNavItem from '../UsersNavItem'

/**
 * Dropdown of Menu
 */

const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, () => {
    setIsOpen(false)
  })
  return (
    <Styles.Wrapper ref={wrapperRef}>
      <Styles.StyledPill onClick={() => setIsOpen(true)}>
        <Icon invert src={DownArrow} />
      </Styles.StyledPill>
      <Styles.Popper show={isOpen}>
        <UsersNavItem />
        <TodosNavItem />
      </Styles.Popper>
    </Styles.Wrapper>
  )
}
NavDropdown.propTypes = {}
NavDropdown.defaultProps = {}
export default NavDropdown
