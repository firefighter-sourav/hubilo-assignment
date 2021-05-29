/**
 * Todos related selectors
 * Complex computations can be memoized by reselect library
 * ref: https://github.com/reduxjs/reselect
 */
import { createSelector } from 'reselect'
const _rawTodos = (state) => state.todos

export const _todos = createSelector([_rawTodos], (todos) => todos)
export const _todosCount = createSelector(
  [_rawTodos],
  (todos) => todos.cachedTodos.length
)
