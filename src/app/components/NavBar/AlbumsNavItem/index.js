import React from 'react'
import { useSelector } from 'react-redux'

import { _albums } from 'app/store/selectors/albums'
import { _posts } from 'app/store/selectors/posts'

import NavPill from '../NavPill'
const AlbumsNavItem = () => {
  const albums = useSelector(_albums)
  const posts = useSelector(_posts)
  return (
    <NavPill
      path="/albums"
      disabled={!posts.requestProcessed}
      showCount={albums.requestProcessed}
      count={albums.cachedAlbums.length}
      label="Albums"
    />
  )
}
export default AlbumsNavItem
