import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// we want to create the Store here entirely *before* rendering
// that's why we don't have a "Provider" here.
// There's no "tapping in" to the redux store once the store is built

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk))
  
  return store
}
