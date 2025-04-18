import {User} from '../models/file.js' 

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Récupérer un utilisateur par ID
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