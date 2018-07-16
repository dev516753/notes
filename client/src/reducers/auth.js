import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
  } from '../actions/types'

const initialState = {
  authenticated: false
}
  
export const auth = (state = initialState, action) => {
  const { type, payload } = action
    switch (type) {
      case AUTH_USER:
        return { authenticated: true }
      case UNAUTH_USER:
        return { authenticated: false }
      case AUTH_ERROR:
        return { error: payload }
      default:
        return state
    }
  };