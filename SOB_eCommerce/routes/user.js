const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

router.get('/', userController.index);

router.post('/', userController.saveNewUser);

router.post('/created', userController.saveNewUser);

router.get('/login', userController.login);

router.get('/register', userController.register);

router.get('/create', userController.create);

router.get('/:id/edit', userController.editUser);

router.get('/:id/userDetail', userController.userDetail);

router.put('/:id', userController.saveEditedUser);

router.delete('/:id', userController.deleteUser);



module.exports = router;