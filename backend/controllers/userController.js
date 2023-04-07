import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import { setCurrentUsers, getCurrentUsers, setUsers } from './../data.js'
import { v4 as uuidv4 } from 'uuid';

const authUser = asyncHandler((req, res) => {
    const { email, password } = req.body
    let currentUsers = getCurrentUsers()
    const user = currentUsers.find((user) => user.email === email)
    if (user && user.password == password) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
})


const registerUser = asyncHandler((req, res) => {
    let currentUsers = getCurrentUsers()
    const { name, email, password } = req.body
    const userExists = currentUsers.find((user) => user.email === email)
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
    let id = uuidv4()
    let newUser = { id, name, email, password }
    setCurrentUsers(newUser)
    res.status(201).json({ ...newUser, token: generateToken(id) })
})

const getUserProfile = asyncHandler((req, res) => {
  let currentUsers = getCurrentUsers()
  let user = currentUsers.find((user) => user.id === req.user.id)

  res.json(user)

  if (user) {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
  authUser,
  registerUser,
  getUserProfile
}