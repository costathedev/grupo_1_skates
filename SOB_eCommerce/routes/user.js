const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

router.get('/login', userController.login);

router.get('/register', userController.register);

router.get('/', userController.index);

router.get('/:id', userController.userDetail);

router.get('/:id/edit', userController.editUser);

router.post('/', userController.saveNewUser);

router.put('/:id', userController.saveEditedUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;