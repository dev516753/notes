import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const requireAuth = (WrappedComponent) => {
  class Authentication extends Component {
    render() {
      if (!this.props.authenticated) {
        return <Redirect to="/signin" />
      }

      return <WrappedComponent { ...this.props }  />

    }
  }
  const mapStateToProps = (state) => {
    return {
      authenticated: state.auth.authenticated
    }
  }
  return connect(mapStateToProps, null)(Authentication)
}