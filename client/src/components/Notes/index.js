import React, { Component } from 'react'
import NotesList from '../../components/NotesList'
import Modal from '../../components/Modal'

class Notes extends Component {
  state = {
    isOpen: false,
    title: '',
    description: '',
    select: ''
  }

  componentDidMount() {
    if (!this.props.isLoaded) {
      this.props.fetchNotes()
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    let note = {
      'title': this.state.title,
      'description': this.state.description
    }

    this.props.createNote(note, () =>
      this.setState({ isOpen: false, title: '', description: '' })
    )
  }

  handleChange = event => {
    this.setState({ select: event.target.value }, () =>
      this.sortBy(this.state.select)
    )
  }
  sortBy(field) {
    const filtered = this.props.notes.sort((a, b) => {
      if (field === 'desc') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
      if (field === 'asc') {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      }
    })
    this.setState({ notes: filtered })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  } 
  render() {
    const { error, isLoading, notes } = this.props

    if (error) {
      return <div>Error! {error.message}</div>
    }
    
    if (isLoading) {
      return <div className='spinner'>Loading...</div>
    }

    return(
      <div>
        <button onClick={this.toggleModal}>add</button>

        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='title'
              placeholder='Заголовок'
              onChange={this.handleInputChange}
              value={this.state.title}
            />
            <input
              type='text'
              name='description'
              placeholder='Описание'
              onChange={this.handleInputChange}
              value={this.state.description}
            />
            <button type='submit'>создать</button>  
          </form>
        </Modal>
        <select value={this.state.select} onChange={event => this.handleChange(event)}>
          <option value='' selected disabled hidden>Сортировать</option>
          <option value='desc'>сначала новые</option>
          <option value='asc'>сначала старые</option>
        </select>
        <NotesList notes={notes} remove={this.props.removeNote}/>
      </div>
    )
  }
}

export default Notes