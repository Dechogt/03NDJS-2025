import express from 'express'
const router = express.Router()
import { createUser, getAllUsers, getUserById, deleteUser } from '../controllers/controller.js'

router.post('/', createUser)

router.get('/', getAllUsers)

router.get('/:id', getUserById)

router.delete('/:id', deleteUser)

export default router