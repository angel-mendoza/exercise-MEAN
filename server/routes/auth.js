import express from 'express'
import debug from 'debug'

const app = express.Router()
const debug = new Debug('exercise-mean:auth')


const findUserByEmail = e => users.find({ email } => email === e)

function comparePasswords(providedPassword, userPassword) {
  return providedPassword === userPassword
}

app.post('/signin', (req, res, next) => {
  const { email, password } = req.body
  const user = findUserByEmail(email)

  if (!user) {
    debug(`User with email ${email} not found`)
    return handleLoginFailed(res)
  }

  if (!comparePasswords(password, user.password)) {
    debug(`Passwords do not match: ${password} !== ${user.password}`)
    return handleLoginFailed(res)
  }
})

function handleLoginFailed(res) {
  return res.status(401).json({
    message: 'Login failed',
    error: 'Email and password don\'t match'
  })
}

export default app
