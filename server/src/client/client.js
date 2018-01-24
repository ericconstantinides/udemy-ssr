// startup for the client-side app
import 'babel-polyfill'
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
// renderRoutes takes an array of routes and turns it into JSX
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'
import reducers from './reducers'

// create the store (reducers, initial state, middleware):
const store = createStore(reducers, {}, applyMiddleware(thunk))

// wrap the store with the Provider component
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
