import React from 'react'
import { useSelector } from 'react-redux'

import { _usersCount } from 'app/store/selectors/users'

import BaseCounter from '../BaseCounter'
/**
 * Shows a Pill with count of users
 */
const UsersCounter = () => {
  const usersCount = useSelector(_usersCount)
  return <BaseCounter name="Users" count={usersCount} />
}

export default UsersCounter
