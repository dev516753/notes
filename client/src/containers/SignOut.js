import { connect } from "react-redux"
import { signOut } from '../actions/auth'
import SignOut from '../components/SignOut'

export default connect(null, { signOut })(SignOut);