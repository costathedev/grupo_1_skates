const express = require('express');
const router = express.Router();
const { body } = require ('express-validator')

const productController = require('../controllers/productController');
const multer = require('multer');


const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const userAdminMiddleware = require('../middlewares/userAdminMiddleware');

// http://localhost:3050/product/productDetail
// ctrl+K+C => Atajo para comentar todo lo que seleccionas.
// ctrl+click sobre una función => Te redirecciona a la función seleccionada


//validaciones
const validateCreateForm = [
    body('name').notEmpty().withMessage('Debes completar el campo de nombre'),
    body('description').notEmpty().withMessage('Debes completar el campo de descripción'),
    body('myfile').notEmpty().withMessage('Debes cargar una imagen'),
    body('price').notEmpty().withMessage('Debes completar el campo de precio'),
]

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

router.post('/', validateCreateForm, uploadFile.single('image'), productController.saveNewProduct);
//Obtener los datos del body, volcarlo en un nuevo objeto producto, agregarlo al array y volver a escribirlo al JSON

router.put('/:id', uploadFile.single('image'), productController.saveEditedProduct);
//Obtener los datos del JSON, volcarlo en un nuevo objeto producto, agregarlo al array y volver a escribirlo al JSON
// ..
router.delete('/:id', productController.deleteProduct);

module.exports = router;
