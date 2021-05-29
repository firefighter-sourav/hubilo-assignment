import React from 'react'
import { useSelector } from 'react-redux'

import { _albums } from 'app/store/selectors/albums'
import { _users } from 'app/store/selectors/users'

import NavOption from '../NavOption'
const UsersNavItem = () => {
  const users = useSelector(_users)
  const albums = useSelector(_albums)
  return (
    <NavOption path="/users" isDisabled={!albums.requestProcessed}>
      Users {users.requestProcessed ? `- ${users.cachedUsers.length}` : ''}
    </NavOption>
  )
}
export default UsersNavItem
