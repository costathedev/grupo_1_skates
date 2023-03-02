const express = require('express');
const router = express.Router();
const categoryAPIController = require ('../controllers/api/categoryAPIController');

router.get('/', categoryAPIController.list);
router.get('/:id', categoryAPIController.show);

module.exports = router;