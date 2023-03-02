const express = require('express');
const router = express.Router();
const userAPIController = require ('../controllers/api/userController');

router.get('/', userAPIController.list);
router.get('/:id', userAPIController.show);

module.exports = router;