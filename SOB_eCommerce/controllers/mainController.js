const fs = require('fs');


const mainController = {
    faq: (req, res) => {
        let faqFile = fs.readFileSync('./data/faq.json', 'utf8');
        let faqs = JSON.parse(faqFile);
        
        res.render('main/faq', {faqs, user: req.session.userLogged})
    },

    aboutUs: (req, res) => {
        //res.render('users/about-us')
        res.render('main/about-us', {user: req.session.userLogged})
    },

    contact: (req, res) => {
        res.render('main/contact', {user: req.session.userLogged})
    },

    
    // refund policy con variables para conectar al json
    
    refundPolicy: (req, res)  => {
        let file = fs.readFileSync('./data/refund-policy.json', 'utf8');
        let arr = JSON.parse(file);

        res.render('main/refund-policy', {arr, user: req.session.userLogged})
    },

    home: (req, res)  => {
        
        res.render('main/index', {user: req.session.userLogged})
    },


}

module.exports = mainController;
