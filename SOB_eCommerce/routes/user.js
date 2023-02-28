const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const multer = require('multer');
const mime = require('mime');


const userValidations = require('../middlewares/userValidations');



const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const userAdminMiddleware = require('../middlewares/userAdminMiddleware');

// Middlewares

const guestMiddleware = require('../middlewares/guestMiddleware');


//validaciones
// // Definir la expresión regular para validar la contraseña
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;



// .isLength({ min: 2 })
// const validateUserForm = [
//     body('firstName').notEmpty().withMessage('Debes completar el campo de nombre'),
//     body('lastName').notEmpty().isLength({ min: 2 }).withMessage('Debes completar el campo de apellido'),
//     body('email').notEmpty().isEmail().withMessage('Debes ingresar un email'),
//     body('birthDate').notEmpty().withMessage('Debes ingresar una fecha'),
//     body('password').notEmpty().isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail().matches(passwordRegex).withMessage('La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial. Debe tener al menos 8 caracteres.')
//     // body('image').custom((value, { req }) => {
//     //   // Obtener el tipo MIME de la imagen
//     //   const mimeType = mime.getType(value);

//     //   // Validar que el tipo MIME sea de los formatos permitidos
//     //   if (mimeType === 'image/jpeg' || mimeType === 'image/png' || mimeType === 'image/gif') {
//     //       return true;
//     //   }
//     //   throw new Error('La imagen debe ser de los formatos JPG, JPEG, PNG o GIF.');
//     // })
//   ];

/*const validateImgUser = [
 check('avatar')
  .custom((value, { req }) => {
        if (!req.file || !['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(req.file.mimetype)) {
          throw new Error('El archivo debe ser un JPEG, JPG, PNG o GIF');
        }
        return true;
      })
 // ]; */




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

router.get('/list', userController.list);
router.get('/:id/show', userController.show);

router.get('/profile', userLoggedMiddleware, userController.profile);

router.get('/login', guestMiddleware, userController.showLogin);

router.get('/register', guestMiddleware, userController.register);

router.get('/create', userLoggedMiddleware, userAdminMiddleware, userController.create);

// Esto deberia ser: o un usuario logueado editar sus propios datos, o un Admin editar los de cualquier usuario.
// Queda pendiente ese control.
router.get('/:id/edit', userController.editUser);

// Idem
router.get('/:id/userDetail', userController.userDetail);

router.post('/', uploadFile.single('avatar'), userValidations, userController.saveNewUser);

//validateImgUser validateUserForm
router.post('/created', uploadFile.single('avatar'), userValidations, userController.saveNewUser);

router.post('/login', userController.login);

router.post('/logout',  userController.logOut)

router.put('/:id', uploadFile.single('avatar'),userValidations ,userController.saveEditedUser);

router.delete('/:id', userController.deleteUser);



module.exports = router;
