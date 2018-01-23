import { USERS_FETCH } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case USERS_FETCH:
      return action.payload.data
    default:
      return state
  }
}
