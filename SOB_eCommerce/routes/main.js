const express = require('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');

router.get('/login', (req, res) => {
    mainController.login(req, res);
});


router.get('/register', (req, res) => {
    // Código
});

module.exports = router;