const mainController = {
    login: function(req, res) {
        res.render('login')
    },

    register: function(req, res) {
        res.render('register')
    },
}

modules.exports = mainController;