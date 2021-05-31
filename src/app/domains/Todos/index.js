import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import BaseList from 'app/components/BaseList'
import UsersCounter from 'app/components/Counters/UsersCounter'
import RestrictedAccess from 'app/components/RestrictedAccess'
import { Flex } from 'app/configs/commonStyles'
import { fetchTodosDispatch } from 'app/store/dispatchers/todos'
import { _albums } from 'app/store/selectors/albums'
import { _todos } from 'app/store/selectors/todos'
import { _users } from 'app/store/selectors/users'

import * as Styles from './styles'

const Todos = () => {
  const users = useSelector(_users)
  const todos = useSelector(_todos)
  const [structuredData, setStructuredData] = useState([])
  useEffect(() => {
    if (!todos.requestProcessed && users.requestProcessed) {
      fetchTodosDispatch()
    }
  }, [])
  useEffect(() => {
    setStructuredData(
      todos.cachedTodos?.map(({ title, id, ...body }) => ({
        id,
        title,
        body: {
          ...body,
          completed: body.completed ? 'Successfully' : 'Failed',
        },
      }))
    )
  }, [todos])
  return users.requestProcessed ? (
    <Styles.Wrapper>
      <Flex>
        <UsersCounter />
      </Flex>
      <BaseList data={structuredData} />
    </Styles.Wrapper>
  ) : (
    <RestrictedAccess>Users page is still not opened</RestrictedAccess>
  )
}
Todos.propTypes = {}
Todos.defaultProps = {}
export default Todos
