import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import { getCurrentUsers } from '../data.js'


const protect = asyncHandler(async (req, res, next) => {
  let token
 
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      let currentUsers = getCurrentUsers()
      const loggedUser = currentUsers.find((user) => user.id === decoded.id)
      req.user = loggedUser


      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})


export { protect }