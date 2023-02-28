const express = require('express');
const router = express.Router();
const { body } = require ('express-validator');
const { check } = require('express-validator');

const productController = require('../controllers/productController');
const multer = require('multer');

const productValidations = require('../middlewares/productValidations');


const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const userAdminMiddleware = require('../middlewares/userAdminMiddleware');

// http://localhost:3050/product/productDetail
// ctrl+K+C => Atajo para comentar todo lo que seleccionas.
// ctrl+click sobre una función => Te redirecciona a la función seleccionada


// //validaciones
// const validateCreateForm = [
//     body('name').notEmpty().isLength({ min: 5 }).withMessage('Debes completar el campo de nombre'),
//     body('description').notEmpty().isLength({ min: 20 }).withMessage('Debes completar el campo de descripción'),
//     body('price').notEmpty().withMessage('Debes completar el campo de precio')
// ];

// const validateImgProduct = [
//     check('image')
//       .custom((value, { req }) => {
//         if (!req.file || !['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(req.file.mimetype)) {
//           throw new Error('El archivo debe ser un JPEG, JPG, PNG o GIF');
//         }
//         return true;
//       })
//   ];




const storage = multer.diskStorage ( {
    destination: function(req, file, cb) {
        console.log('Destination....');
        cb(null, './public/img/products');
    },
    filename: function(req, file, cb) {
        console.log('Filename....');
        cb(null, `${Date.now()}_${file.originalname}`);
    },
} );

const uploadFile = multer({storage});

router.get('/', userLoggedMiddleware, userAdminMiddleware, productController.index) // ok

router.get('/carrodecompras', userLoggedMiddleware, productController.carroDeCompras); // ok

router.get('/create', userLoggedMiddleware, userAdminMiddleware, productController.newProduct); // render de la vista producto.  ok

router.get('/:category/search', productController.searchProductsByCategory)

router.get('/search', productController.searchProducts)

router.get('/:id/addToCart', productController.addToCart)

router.get('/:id/edit', userLoggedMiddleware, userAdminMiddleware, productController.editProduct);  
// identificar el id recibido en req.params, buscar en el JSON de productos el que coincida con el ID.
// renderizar la vista de producto enviando como dato el producto. ok

router.get('/:id/productDetail', productController.productDetail);
// identificar el id recibido en req.params, buscar en el JSON de productos el que coincida con el ID.
// renderizar la vista de producto enviando como dato el producto 

router.post('/', productValidations, uploadFile.single('image'), productController.saveNewProduct);
//Obtener los datos del body, volcarlo en un nuevo objeto producto, agregarlo al array y volver a escribirlo al JSON

router.put('/:id', productValidations, uploadFile.single('image'), productController.saveEditedProduct);
//Obtener los datos del JSON, volcarlo en un nuevo objeto producto, agregarlo al array y volver a escribirlo al JSON
// ..
router.delete('/:id', productController.deleteProduct);

module.exports = router;
