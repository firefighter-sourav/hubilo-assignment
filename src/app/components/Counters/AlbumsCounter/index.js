import React from 'react'
import { useSelector } from 'react-redux'

import { _albumsCount } from 'app/store/selectors/albums'

import BaseCounter from '../BaseCounter'
/**
 * Shows a Pill with count of albums
 */
const AlbumsCounter = (props) => {
  const albumsCount = useSelector(_albumsCount)

  return <BaseCounter name="Albums" count={albumsCount} />
}

export default AlbumsCounter
