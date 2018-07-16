import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'
import SignOut from './containers/SignOut'
import Notes from './containers/Notes'
import { requireAuth } from './hoc/requireAuth'

const App = () => (
  <div className='app'>
    <Header />
    <Switch>
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/signout' component={SignOut} />
      <Route path="/" component={requireAuth(Notes)} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </div>
)

export default App