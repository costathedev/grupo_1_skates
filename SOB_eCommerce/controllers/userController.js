const userController = {
    login: function(req, res) {
        res.render('users/login')
    },

    register: function(req, res) {
        console.log("Url de register", req.url);
        res.render('users/register')
    },

    index: function(req, res){
        res.render('users/list')
    },

    userDetail: function(req, res){
        let id = req.params.id;

        let user = {id: id, name: 'prueba Nombre', user_name: 'prueba Usu'};
        res.render('users/register', {user});
        console.log('Viendo detalles del usuario ', user);
        console.log("Url de userDetail", req.url);
    },

    editUser: function(req, res){},

    saveNewUser: function(req, res){},

    saveEditedUser: function(req, res){},

    deleteUser: function(req, res){},

}

module.exports = userController;