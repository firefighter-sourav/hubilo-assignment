import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import albumsReducer from './reducers/albums'
import postsReducer from './reducers/posts'
import todosReducer from './reducers/todos'
import usersReducer from './reducers/users'

const middlewares = [thunkMiddleware]

const rootReducer = combineReducers({
  posts: postsReducer,
  albums: albumsReducer,
  users: usersReducer,
  todos: todosReducer,
})

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
