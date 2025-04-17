import express from 'express'
const Router = express.Router()
import userController from '../controllers/Controller.js' 
import authenticate from '../middleware/file.js'  

Router.post('/', userController.createUser)

Router.get('/', userController.getAllUsers)

Router.get('/:id', userController.getUserById)

Router.delete('/:id', userController.deleteUser)

Router.get('/me', authenticate, (req, res) => {
    res.send(req.user);
  });

export default Router