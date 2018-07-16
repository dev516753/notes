import axios from 'axios'
import { AUTH_USER, UNAUTH_USER, CLEAR } from './types'

const ROOT_URL = 'http://localhost:3000/api/v1'

export const signUp = data => {
  return dispatch => {
    axios.post(`${ROOT_URL}/signup`, data)
      .then()
      .catch(error => console.log('error.response:', error.message))
  }
}

export const signIn = (data, cb) => {
  return dispatch => {
    axios.post(`${ROOT_URL}/signin`, data)
      .then(response => {

        dispatch({ type: AUTH_USER })

        localStorage.setItem('token', response.data.token)
        
        cb()
      })
      .catch(error => console.log('error.response:', error.message))
  };
}
export const signOut = () => {
  localStorage.removeItem('token')
  return dispatch => {
    dispatch({ type: UNAUTH_USER })
    dispatch({ type: CLEAR })
  }
};