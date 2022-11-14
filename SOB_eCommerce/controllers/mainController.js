const mainController = {
    faq: (req, res) => {
        let faqs = [{
            question: "First Question",
            answer: "First answer ............."  
        },
        {
            question: "Second Question",
            answer: "Second answer ............"  
        }];
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