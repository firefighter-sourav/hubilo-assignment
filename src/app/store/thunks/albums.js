import { createAlbum, fetchAlbums } from 'api/albums'

import {
  createAlbumsFailed,
  createAlbumsStart,
  createAlbumsSuccess,
  fetchAlbumsFailed,
  fetchAlbumsStart,
  fetchAlbumsSuccess,
} from '../actions/albums'

export const fetchAlbumsHandler = () => {
  return (dispatch) => {
    dispatch(fetchAlbumsStart())
    fetchAlbums()
      .then((data) => dispatch(fetchAlbumsSuccess(data)))
      .catch((error) => dispatch(fetchAlbumsFailed(error)))
  }
}

export const createAlbumsHandler = (saveData) => {
  return (dispatch) => {
    dispatch(createAlbumsStart())
    createAlbum(saveData)
      .then((data) => dispatch(createAlbumsSuccess(data)))
      .catch((error) => dispatch(createAlbumsFailed(error)))
  }
}
