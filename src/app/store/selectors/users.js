/**
 * Users related selectors
 * Complex computations can be memoized by reselect library
 * ref: https://github.com/reduxjs/reselect
 */
import { createSelector } from 'reselect'
const _rawUsers = (state) => state.users

export const _users = createSelector([_rawUsers], (users) => users)
export const _usersCount = createSelector(
  [_rawUsers],
  (users) => users.cachedUsers.length
)
