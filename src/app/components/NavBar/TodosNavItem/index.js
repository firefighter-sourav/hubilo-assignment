import React from 'react'
import { useSelector } from 'react-redux'

import { _albums } from 'app/store/selectors/albums'
import { _todos } from 'app/store/selectors/todos'
import { _users } from 'app/store/selectors/users'

import NavOption from '../NavOption'
const TodosNavItem = () => {
  const users = useSelector(_users)
  const todos = useSelector(_todos)
  return (
    <NavOption path="/todos" isDisabled={!users.requestProcessed}>
      Todos {todos.requestProcessed ? `- ${todos.cachedTodos.length}` : ''}
    </NavOption>
  )
}
export default TodosNavItem
