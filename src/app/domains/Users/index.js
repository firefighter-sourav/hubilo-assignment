import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import BaseList from 'app/components/BaseList'
import AlbumsCounter from 'app/components/Counters/AlbumsCounter'
import PostsCounter from 'app/components/Counters/PostsCounter'
import RestrictedAccess from 'app/components/RestrictedAccess'
import { Flex } from 'app/configs/commonStyles'
import { fetchUsersDispatch } from 'app/store/dispatchers/users'
import { _albums } from 'app/store/selectors/albums'
import { _users } from 'app/store/selectors/users'

import * as Styles from './styles'

const Users = () => {
  const albums = useSelector(_albums)
  const users = useSelector(_users)
  const [structuredData, setStructuredData] = useState([])
  useEffect(() => {
    if (!users.requestProcessed && albums.requestProcessed) {
      fetchUsersDispatch()
    }
  }, [])
  useEffect(() => {
    setStructuredData(
      users.cachedUsers?.map(({ name, id, ...body }) => ({
        id,
        title: name,
        body: {
          ...body,
          address: JSON.stringify(body.address),
          company: JSON.stringify(body.company),
        },
      }))
    )
  }, [users])
  return albums.requestProcessed ? (
    <Styles.Wrapper>
      <Flex>
        <PostsCounter />
        <AlbumsCounter />
      </Flex>
      <BaseList data={structuredData} />
    </Styles.Wrapper>
  ) : (
    <RestrictedAccess>Albums tab is still not clicked</RestrictedAccess>
  )
}
Users.propTypes = {}
Users.defaultProps = {}
export default Users
