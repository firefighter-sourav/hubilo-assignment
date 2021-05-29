import store from '..'
import { fetchAlbumsHandler } from '../thunks/albums'

export const fetchAlbumsDispatch = () => {
  store.dispatch(fetchAlbumsHandler())
}
