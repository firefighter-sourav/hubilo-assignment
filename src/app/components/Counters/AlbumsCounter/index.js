import React from 'react'
import { useSelector } from 'react-redux'

import { _albumsCount } from 'app/store/selectors/albums'

import BaseCounter from '../BaseCounter'

const AlbumsCounter = (props) => {
  const albumsCount = useSelector(_albumsCount)

  return <BaseCounter name="Albums" count={albumsCount} />
}

export default AlbumsCounter
