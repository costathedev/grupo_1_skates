const express = require('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');

router.get('/faq', mainController.faq);

router.get('/about-us', mainController.aboutUs);

router.get('/contact', mainController.login);

router.get('/refund-policy', mainController.register);

router.get('/', mainController.register);


module.exports = router;