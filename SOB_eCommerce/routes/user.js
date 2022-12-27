const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const multer = require('multer');

// Middlewares

const guestMiddleware = require('../middlewares/guestMiddleware');

const storage = multer.diskStorage ( {
    destination: function(req, file, cb) {
        console.log('Destination....');
        cb(null, './public/img/users_avatars');
    },
    filename: function(req, file, cb) {
        console.log('Filename....');
        cb(null, `${Date.now()}_${file.originalname}`);
    },
} );

const uploadFile = multer({storage});

router.get('/', userController.index);

router.post('/', uploadFile.single('avatar'), userController.saveNewUser);

router.post('/created', userController.saveNewUser);

router.post('/login', userController.login);

router.get('/login', userController.showLogin);

router.get('/register', userController.register);

router.get('/create', userController.create);

router.get('/:id/edit', userController.editUser);

router.get('/:id/userDetail', userController.userDetail);

router.put('/:id', uploadFile.single('avatar') ,userController.saveEditedUser);

router.delete('/:id', userController.deleteUser);



module.exports = router;
