import { Router } from 'express'

const userController = require('../controllers/user.controller');
const router = Router();

// Routes are placed here
router.get('/get-users', userController.getUsers)

router.get('/get-user/:id', userController.getUser)

router.post('/create-user', userController.createUser)

router.patch('/update-user/:id', userController.updateUser)

router.delete('/delete-user', userController.deleteUser)

export default router;