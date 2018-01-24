// import React from 'react'
import Home from './components/Home'
import UsersList, { loadData } from './components/UsersList'

// OLD WAY:
/* export default () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={UsersList} />
    </div>
  )
} */

// NEW WAY for SSR!
export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersList
  }
]
