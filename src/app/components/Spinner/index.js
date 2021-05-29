import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { _albums } from 'app/store/selectors/albums'
import { _posts } from 'app/store/selectors/posts'
import { _todos } from 'app/store/selectors/todos'
import { _users } from 'app/store/selectors/users'

import StyledSpinner from './styles'

const Spinner = () => {
  const posts = useSelector(_posts)
  const albums = useSelector(_albums)
  const todos = useSelector(_todos)
  const users = useSelector(_users)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (
      posts.requestInProgress ||
      albums.requestInProgress ||
      todos.requestInProgress ||
      users.requestInProgress
    ) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [
    posts.requestInProgress,
    albums.requestInProgress,
    todos.requestInProgress,
    users.requestInProgress,
  ])
  return loading && <StyledSpinner />
}

export default Spinner
