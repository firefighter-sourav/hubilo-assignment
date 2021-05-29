import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import BaseList from 'app/components/BaseList'
import UsersCounter from 'app/components/Counters/UsersCounter'
import { Flex } from 'app/configs/commonStyles'
import { fetchTodosDispatch } from 'app/store/dispatchers/todos'
import { _albums } from 'app/store/selectors/albums'
import { _todos } from 'app/store/selectors/todos'

import * as Styles from './styles'

const Todos = () => {
  const todos = useSelector(_todos)
  const [structuredData, setStructuredData] = useState([])
  useEffect(() => {
    if (!todos.requestProcessed) {
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
  return (
    <Styles.Wrapper>
      <Flex>
        <UsersCounter />
      </Flex>
      <BaseList data={structuredData} />
    </Styles.Wrapper>
  )
}
Todos.propTypes = {}
Todos.defaultProps = {}
export default Todos
