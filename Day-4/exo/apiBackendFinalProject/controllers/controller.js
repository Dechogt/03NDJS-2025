import bcrypt from 'bcryptjs' 
import jwt from 'jsonwebtoken'
import {User} from '../models/file.js'
import dotenv from 'dotenv'

export const createUser = async (req, res) => {
  const { email, password } = req.body
  const hash = await bcrypt.hash(password, 10)
  const newUser = new User({ email, password: hash, isAdmin: false })
  const saved = await newUser.save()
  // Cacher l'implementation du hashage
  const { password: pwd, ...userSafe } = saved.toObject()
  res.status(201).json(userSafe)
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ message: "Cet utilisateur n'existe pas"})
    }
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// exports.updateUser = async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     if (!updatedUser) {
//       return res.status(404).json({ message: "Non reconnu!" })
//     }
//     res.json(updatedUser)
//   } catch (err) {
//     res.status(400).json({ message: err.message })
//   }
// }

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).json({ message: "Impossible d'effectuer cette suppression" })
    }
    res.json({ message: 'Suppression effectuée' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}