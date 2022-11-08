const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController');

router.get('/productDetail', productController.productofunction);

module.exports = router;