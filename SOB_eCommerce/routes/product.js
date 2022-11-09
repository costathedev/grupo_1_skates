const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// http://localhost:3050/product/productDetail
router.get('/productDetail', productController.productofunction);


router.get('/altaProducto', productController.altaproducto);

module.exports = router;