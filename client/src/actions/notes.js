import axios from 'axios'
import {
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_BEGIN,
  FETCH_NOTES_ERROR,
  ADD,
  REMOVE
} from './types'

const ROOT_URL = 'http://localhost:3000/api/v1'

export const fetchNotes = () => {
  return dispatch => {

    dispatch({ type: FETCH_NOTES_BEGIN })
    
    axios.get(`${ROOT_URL}/notes`,
      { headers: { authorization: localStorage.getItem('token')}}
    )
      .then(res => {
        dispatch({ type: FETCH_NOTES_SUCCESS, payload: res.data})
      })
      .catch(error => {
        dispatch({ type: FETCH_NOTES_ERROR, payload: error})
      })
  };
};

export const createNote = (data, cb) => {
  return dispatch => {
    axios.post(`${ROOT_URL}/notes/add`,
      data,
      { headers: { authorization: localStorage.getItem('token')} }
    )
      .then( res => {
        dispatch({ type: ADD, payload: res.data })
        cb()
      })
      .catch(error => console.log(error))
  }
}

export const removeNote = id => {
  return dispatch => {
    axios.delete(`${ROOT_URL}/notes/${id}`,
      { headers: { authorization: localStorage.getItem('token')} }
    )
      .then( response => dispatch({ type: REMOVE, payload: { id } }) )
  } 
}