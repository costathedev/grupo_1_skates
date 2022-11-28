const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// http://localhost:3050/product/productDetail


router.get('/', productController.index)

router.get('/carrodecompras', productController.carroDeCompras);

router.get('/create', productController.newProduct);

router.get('/:id/edit', productController.editProduct);

router.get('/:id', productController.productDetail);

router.post('/', productController.saveNewProduct);

router.put('/:id', productController.saveEditedProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
