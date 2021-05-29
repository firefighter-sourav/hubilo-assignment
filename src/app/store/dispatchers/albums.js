import store from '..'
import { fetchAlbumsHandler } from '../thunks/albums'
/**
 * Dispatch fetchAlbums handler thunk
 * Alternative approach could be useDispatch(fetchAlbumsHandler()) from the component itself
 * or by any custom hook
 */
export const fetchAlbumsDispatch = () => {
  store.dispatch(fetchAlbumsHandler())
}
