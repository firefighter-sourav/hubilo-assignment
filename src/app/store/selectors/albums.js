/**
 * Albums related selectors
 * Complex computations can be memoized by reselect library
 * ref: https://github.com/reduxjs/reselect
 */
import { createSelector } from 'reselect'

const _rawAlbums = (state) => state.albums

export const _albums = createSelector([_rawAlbums], (albums) => albums)
export const _albumsCount = createSelector(
  [_rawAlbums],
  (albums) => albums.cachedAlbums.length
)
