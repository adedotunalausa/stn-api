import { Router } from 'express'

const userController = require('../controllers/user.controller');
const router = Router();

// Routes are placed here
router.get('/:id', userController.getUser)

router.post('/create', userController.createUser)

router.post('/update/:id', userController.updateUser)

router.post('/delete', userController.deleteUser)

export default router;