const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const multer = require('multer');

const { body } = require ('express-validator')
const { check } = require('express-validator');



const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const userAdminMiddleware = require('../middlewares/userAdminMiddleware');

// Middlewares

const guestMiddleware = require('../middlewares/guestMiddleware');


//validaciones
const validateUserForm = [
    body('firstName').notEmpty().isLength({ min: 2 }).withMessage('Debes completar el campo de nombre'),
    body('lastName').notEmpty().withMessage('Debes completar el campo de descripción'),
    body('email').notEmpty().isEmail().withMessage('Debes ingresar un email'),
    body('birthDate1').notEmpty().withMessage('Debes ingresar una fecha'),
];

const validateImgUser = [
    check('imgprofile')
      .custom((value, { req }) => {
        if (!req.file || !['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(req.file.mimetype)) {
          throw new Error('El archivo debe ser un JPEG, JPG, PNG o GIF');
        }
        return true;
      })
  ];




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

router.get('/', userLoggedMiddleware, userAdminMiddleware, userController.index);

router.get('/profile', userLoggedMiddleware, userController.profile);

router.get('/login', guestMiddleware, userController.showLogin);

router.get('/register', guestMiddleware, userController.register);

router.get('/create', userLoggedMiddleware, userAdminMiddleware, userController.create);

// Esto deberia ser: o un usuario logueado editar sus propios datos, o un Admin editar los de cualquier usuario.
// Queda pendiente ese control.
router.get('/:id/edit', userController.editUser);

// Idem
router.get('/:id/userDetail', userController.userDetail);

router.post('/', uploadFile.single('avatar'), userController.saveNewUser);

router.post('/created', validateUserForm, validateImgUser, userController.saveNewUser);

router.post('/login', userController.login);

router.post('/logout',  userController.logOut)

router.put('/:id', uploadFile.single('avatar') ,userController.saveEditedUser);

router.delete('/:id', userController.deleteUser);



module.exports = router;
