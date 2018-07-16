import { connect } from "react-redux"
import { signIn } from '../actions/auth'
import SignIn from '../components/SignIn'

export default connect(null, { signIn })(SignIn)