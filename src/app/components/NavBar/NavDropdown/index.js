import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { _albums } from 'app/store/selectors/albums'
import { _todos } from 'app/store/selectors/todos'
import { _users } from 'app/store/selectors/users'

import * as Styles from './styles'

import TodosNavItem from '../TodosNavItem'
import UsersNavItem from '../UsersNavItem'
const NavDropdown = () => {
  const history = useHistory()
  const go = (e) => {
    e.persist()
    if (e.target.value !== '') {
      history.push(e.target.value)
    }
  }
  return (
    <Styles.Select onChange={go} defaultValue="">
      <Styles.Option disabled value="">
        More
      </Styles.Option>
      <UsersNavItem />
      <TodosNavItem />
    </Styles.Select>
  )
}
NavDropdown.propTypes = {}
NavDropdown.defaultProps = {}
export default NavDropdown
