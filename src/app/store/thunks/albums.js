import { createAlbum, fetchAlbums } from 'api/albums'

import {
  createAlbumsFailed,
  createAlbumsStart,
  createAlbumsSuccess,
  fetchAlbumsFailed,
  fetchAlbumsStart,
  fetchAlbumsSuccess,
} from '../actions/albums'
/**
 * Thunk fetchAlbumsHandler
 * Calls the fetch albums api
 * Receives 100 albums entries
 * On Success/Failure
 *  updates the store
 */
export const fetchAlbumsHandler = () => {
  return (dispatch) => {
    dispatch(fetchAlbumsStart())
    fetchAlbums()
      .then((data) => dispatch(fetchAlbumsSuccess(data)))
      .catch((error) => dispatch(fetchAlbumsFailed(error)))
  }
}

/**
 * Thunk createAlbumsHandler
 * Calls the create album api
 * Receives 1 album which we just created
 * On Success/Failure
 *  updates the store
 */
export const createAlbumsHandler = (saveData) => {
  return (dispatch) => {
    dispatch(createAlbumsStart())
    createAlbum(saveData)
      .then((data) => dispatch(createAlbumsSuccess(data)))
      .catch((error) => dispatch(createAlbumsFailed(error)))
  }
}
