import User from '../models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import keys from '../config/keys'
import errorHandler from '../utils/errorHandler'

class Auth {
  async signup(req, res) {

    const candidate = await User.findOne({ email: req.body.email })

    if (candidate) {

      res.status(409).json({
        message: "User with such email is already exist"
      })

    } else {
      const salt = bcrypt.genSaltSync(10)
      const password = req.body.password

      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt)
      })
    
      try {
        await user.save()
        res.status(201).json(user)
      } catch(e) {
        errorHandler(res, e)
      }

    }

  }
  async signin(req, res) {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
      const passwordResut = bcrypt.compareSync(req.body.password, candidate.password)
      if (passwordResut) {
        const token = jwt.sign(
          {
            email: candidate.email,
            userId: candidate._id
          },
          keys.secret,
          { expiresIn: 60 * 60 }//время жизни токена 1 час
        )
        res.status(200).json({
          token: `Bearer ${token}`
        })
      } else {
        res.status(401).json({
          message: 'password is incorect'
        })
      }
    } else {
      res.status(404).json({
        message: 'user with such email not found'
      })
    }
  }
}

export default Auth