import axios from 'axios'

export const USERS_FETCH = 'USERS_FETCH'
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users')

  dispatch({
    type: USERS_FETCH,
    payload: res
  })
}
