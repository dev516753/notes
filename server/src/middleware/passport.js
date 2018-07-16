import { Strategy, ExtractJwt } from 'passport-jwt'
import keys from '../config/keys'
import User from '../models/user'

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secret
}

export default passport => {
  passport.use(
    new Strategy(options, async (payload, done)=> {
      try {
        const user = await User.findById(payload.userId).select('email id')

        if(user) {
          done(null, user)
        } else {
          done(null, false)
        }
      } catch(e) {
        console.log(e)
      }
    })
  )
}