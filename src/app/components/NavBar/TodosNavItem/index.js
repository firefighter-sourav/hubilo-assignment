import React from 'react'
import { useSelector } from 'react-redux'

import { _todos } from 'app/store/selectors/todos'
import { _users } from 'app/store/selectors/users'

import NavPill from '../NavPill'
const TodosNavItem = () => {
  const users = useSelector(_users)
  const todos = useSelector(_todos)
  return (
    <NavPill
      disabled={!users.requestProcessed}
      path="/todos"
      showCount={todos.requestProcessed}
      count={todos.cachedTodos.length}
      label="Todos"
    />
  )
}
export default TodosNavItem
