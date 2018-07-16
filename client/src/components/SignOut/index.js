import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class SignOut extends Component {
  state = {
    redirect: false
  }
  componentWillMount() {
    this.props.signOut()
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    return null
  }
}

export default SignOut