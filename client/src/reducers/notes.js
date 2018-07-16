import {
    FETCH_NOTES_BEGIN,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_ERROR,
    ADD,
    REMOVE,
    CLEAR
  } from '../actions/types'

const initialState = {
  notes: [],
  isLoading: false,
  isLoaded: false,
  error: null
}

export const notes = (state = initialState, action) => {
  const { type, payload } = action
    switch (type) {
      case FETCH_NOTES_BEGIN:
        return {
            ...state,
            isLoading: true
        }
      case FETCH_NOTES_SUCCESS:
        return {
          ...state,
          notes: payload,
          isLoading: false,
          isLoaded: true
        }
      case FETCH_NOTES_ERROR:
        return {
          ...state,
          error: payload.error,
          isLoading: false
        }
      case ADD:
        return {
          ...state,
          notes: [...state.notes, payload]
        }
      case REMOVE:
        return {
          ...state,
          notes: state.notes.filter(value => value._id !== payload.id)
        }
      case CLEAR:
        return {
          ...state,
          notes: [],
          isLoading: false,
          isLoaded: false,
          error: null
        }
      default:
        return state
    }
  }