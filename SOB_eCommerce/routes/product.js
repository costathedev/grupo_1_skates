const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// http://localhost:3050/product/productDetail


router.get('/', productController.index)

router.get('/:id', productController.productDetail);

router.get('/create', productController.newProduct);

router.get('/:id/edit', productController.editProduct);

router.post('/', productController.saveNewProduct);

router.put('/:id', productController.saveEditedProduct);

router.delete('/:id', productController.deleteProduct)

router.get('/carrodecompras', productController.carroDeCompras);

module.exports = router;
