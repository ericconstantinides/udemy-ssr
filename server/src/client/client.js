// startup for the client-side app
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// createStore creates the store.
// applyMiddleware hooks up middleware to redux
import { createStore, applyMiddleware } from 'redux'
// thunk for the async action creators
import thunk from 'redux-thunk'
// Provider ties the store and the react app together
// Provider is a React Component
import { Provider } from 'react-redux'
import Routes from './Routes'

// create the store (reducers, initial state, middleware):
const store = createStore(reducers, {}, applyMiddleware(thunk))

// wrap the store with the Provider component
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
