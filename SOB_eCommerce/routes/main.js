const express = require('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');

router.get('/faq', mainController.faq);

// http://localhost:3050/main/about-us
router.get('/about-us', mainController.aboutUs);

router.get('/mediosDePago', mainController.mediosDePago)

router.get('/contact', mainController.contact);

router.get('/refund-policy', mainController.refundPolicy);

router.get('/', mainController.home);


module.exports = router;