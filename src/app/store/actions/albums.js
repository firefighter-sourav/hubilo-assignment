import * as types from '../types/albums'

export const fetchAlbumsStart = () => {
  return {
    type: types.FETCH_ALBUMS,
  }
}

export const fetchAlbumsSuccess = (data) => {
  return {
    type: types.FETCH_ALBUMS_SUCCESS,
    payload: {
      data,
    },
  }
}

export const fetchAlbumsFailed = (error) => {
  return {
    type: types.FETCH_ALBUMS_FAILED,
    payload: {
      error,
    },
  }
}

export const createAlbumsStart = () => {
  return {
    type: types.CREATE_ALBUMS,
  }
}

export const createAlbumsSuccess = (data) => {
  return {
    type: types.CREATE_ALBUMS_SUCCESS,
    payload: {
      data,
    },
  }
}

export const createAlbumsFailed = (error) => {
  return {
    type: types.CREATE_ALBUMS_FAILED,
    payload: {
      error,
    },
  }
}
