import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    redirect: false
  }
  handleSubmit = event => {
    event.preventDefault()
    let data = {
      "email": this.state.email,
      "password": this.state.password
    }
    this.props.signIn(data, () =>
      this.setState({ redirect: true })
    )
  }
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            onChange={this.handleInputChange}
            value={this.state.email}
            placeholder='email'
          />
          <input
            type='password'
            name='password'
            onChange={this.handleInputChange}
            value={this.state.password}
            placeholder='password'
          />
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default SignIn