const fs = require('fs');


const mainController = {
    faq: (req, res) => {
        let faqFile = fs.readFileSync('./data/faq.json', 'utf8');
        let faqs = JSON.parse(faqFile);
        
        res.render('main/faq', {faqs})
    },

    aboutUs: (req, res) => {
        res.render('users/about-us')
    },

    contact: (req, res) => {
        res.render('main/contact')
    },

    refundPolicy: (req, res)  => {
        res.render('main/refund-policy')
    },

    home: (req, res)  => {
        res.render('main/index')
    },


}

module.exports = mainController;