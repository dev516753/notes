import { connect } from "react-redux"
import { signUp } from '../actions/auth'
import SignUp from '../components/SignUp'

export default connect(null, { signUp })(SignUp);