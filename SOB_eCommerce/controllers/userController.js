const userController = {
    login: function(req, res) {
        res.render('users/login')
    },

    register: function(req, res) {
        res.render('users/register')
    },

    index: function(req, res){},

    userDetail: function(req, res){},

    editUser: function(req, res){},

    saveNewUser: function(req, res){},

    saveEditedUser: function(req, res){},

    deleteUser: function(req, res){},

}

module.exports = userController;