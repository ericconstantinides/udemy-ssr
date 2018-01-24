// import React from 'react'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'

// OLD WAY:
/* export default () => {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/users' component={UsersListPage} />
    </div>
  )
} */

// NEW WAY for SSR!
export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersListPage,
    path: '/users'
  }
]
