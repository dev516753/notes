import express from 'express'
const router = express.Router()

import Auth from '../controllers/auth'
const authController = new Auth();

router.post('/signup', authController.signup)
router.post('/signin', authController.signin)

export default router