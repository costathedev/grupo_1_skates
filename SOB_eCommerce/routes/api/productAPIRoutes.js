const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productAPIController');

router.get('/', productAPIController.list);
router.get('/lastTen', productAPIController.LastTen);
router.get('/last', productAPIController.last);
router.get('/:id', productAPIController.show);
router.get('/:img/image', productAPIController.image)

module.exports = router;