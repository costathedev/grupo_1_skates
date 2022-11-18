const fs = require('fs');


const mainController = {
    faq: (req, res) => {
        let faqFile = fs.readFileSync('./data/faq.json', 'utf8');
        let faqs = JSON.parse(faqFile);
        
        res.render('main/faq', {faqs})
    },

    aboutUs: (req, res) => {
        //res.render('users/about-us')
        res.render('main/about-us')
    },

    contact: (req, res) => {
        res.render('main/contact')
    },

    
    // refund policy 
    
    refundPolicy: (req, res)  => {
        let file = fs.readFileSync('./data/refund-policy.json', 'utf8');
        let arr = JSON.parse(file);

        res.render('main/refund-policy', {arr})
    },

    home: (req, res)  => {
        res.render('main/index')
    },


}

module.exports = mainController;
