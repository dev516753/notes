import { connect } from 'react-redux'
import { fetchNotes, createNote, removeNote } from '../actions/notes'
import Notes from '../components/Notes'

const mapStateToProps = state => {
  return {
    notes: state.notes.notes,
    error: state.notes.error,
    isLoading: state.notes.isLoading,
    isLoaded: state.notes.isLoaded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (data, cb) => dispatch(createNote(data, cb)),
    removeNote: (id) => dispatch(removeNote(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)