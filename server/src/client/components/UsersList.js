import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }
  renderUsers () {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
  }
  render () {
    return (
      <div>
        <h1>
          UsersList
        </h1>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}
const mapStateToProps = ({ users }) => ({ users })

// this is what we use for SSR to load data
export const loadData = store => {
  // this returns a promise()
  return store.dispatch(fetchUsers())
}

export default connect(mapStateToProps, { fetchUsers })(UsersList)
