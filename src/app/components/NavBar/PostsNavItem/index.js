import React from 'react'
import { useSelector } from 'react-redux'

import { _albums } from 'app/store/selectors/albums'
import { _posts } from 'app/store/selectors/posts'

import NavPill from '../NavPill'
const PostsNavItem = () => {
  const posts = useSelector(_posts)
  return (
    <NavPill
      path="/posts"
      showCount={posts.requestProcessed}
      count={posts.cachedPosts.length}
      label="Posts"
    />
  )
}
export default PostsNavItem
