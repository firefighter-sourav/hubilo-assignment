import React from 'react'
import { useSelector } from 'react-redux'

import { _albums } from 'app/store/selectors/albums'
import { _users } from 'app/store/selectors/users'

import NavPill from '../NavPill'
const UsersNavItem = () => {
  const users = useSelector(_users)
  const albums = useSelector(_albums)
  return (
    <NavPill
      disabled={!albums.requestProcessed}
      path="/users"
      showCount={users.requestProcessed}
      count={users.cachedUsers.length}
      label="Users"
    />
  )
}
export default UsersNavItem
