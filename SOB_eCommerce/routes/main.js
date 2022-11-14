const express = require('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');

router.get('/faq', mainController.faq);

router.get('/about-us', mainController.aboutUs);

router.get('/contact', mainController.contact);

router.get('/refund-policy', mainController.refundPolicy);

router.get('/', mainController.home);


module.exports = router;