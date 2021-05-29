import React from 'react'
import { useSelector } from 'react-redux'

import { _postsCount } from 'app/store/selectors/posts'

import BaseCounter from '../BaseCounter'
/**
 * Shows a Pill with count of posts
 */
const PostsCounter = () => {
  const postsCount = useSelector(_postsCount)

  return <BaseCounter name="Posts" count={postsCount} />
}

export default PostsCounter
