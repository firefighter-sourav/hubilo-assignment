/**
 * Posts related selectors
 * Complex computations can be memoized by reselect library
 * ref: https://github.com/reduxjs/reselect
 */
import { createSelector } from 'reselect'
const _rawPosts = (state) => state.posts

export const _posts = createSelector([_rawPosts], (posts) => posts)
export const _postsCount = createSelector(
  [_rawPosts],
  (posts) => posts.cachedPosts.length
)
