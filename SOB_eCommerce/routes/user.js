const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

router.get('/login', (req, res) => {
    userController.login(req, res);
});


router.get('/register', (req, res) => {
    userController.register(req, res);
});

module.exports = router;