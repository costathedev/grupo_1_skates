const mainController = {
    login: function(req, res) {
        // res.render('users/login')
        res.sendFile(__dirname + '/login.html')
    },

    register: function(req, res) {
        res.render('users/register')
    },
}

module.exports = mainController;