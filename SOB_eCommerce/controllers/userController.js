const path = require('path');
const fs = require('fs');

const rutaUsersJson = path.resolve('./data/users.json');

let users = [];

function loadUsers() {
    let usersFile = fs.readFileSync(rutaUsersJson, 'utf-8');
    console.log("Archivo: ", usersFile);
    users = JSON.parse(usersFile);
    console.log("Array: ", users);
} 

function writeUsers() {
    const fs = require('fs');
    fs.writeFileSync(rutaUsersJson , JSON.stringify(users))
}

const userController = {
    login: function(req, res) {
        res.render('users/login');
    },

    register: function(req, res) {
        res.render('users/register');
    },

    index: function(req, res){
        loadUsers();
        res.render('users/list', {users})
    },

    userDetail: function(req, res){
        let id = req.params.id;

        let user = users.find( user => user.id === id);
        if (user){
            res.render('users/register', {user, readOnly: true})
        } 
    },

    editUser: function(req, res){
        let id = req.params.id;
        console.log("Editando: ", id, "Ruta: ", rutaUsersJson)
        loadUsers();
        let user = users.find( user => user.id == id );
        if (user != undefined && user.id>0 ){
            res.render('users/register', {user})
        } 
        else {
            res.send('No se encontró el usuario' + id)
        }
    },

    saveNewUser: function(req, res){
        let user = req.body;
        loadUsers();
        let maxId = 0;
        users.forEach ( user => user.id > maxId ? maxId = user.id : '');
        user.id = maxId + 1;

        users.push(user);
        
        writeUsers();

        res.redirect('/');
    },

    saveEditedUser: function(req, res){
        loadUsers();
        let id = req.params.id;
        let user = users.find( user => user.id === id );
        if (user) {
            user.apellido = req.body.apellido;
            user.nombre = req.body.usuario;

            users = users.filter( user => user.id !== id);
            users.push(user);
            writeUsers;

            res.redirect('/');
        }
        
    },

    deleteUser: function(req, res){
        loadUsers();
        let id = req.params.id;
        users = users.filter( user => user.id !== id);
        writeUsers;

        res.redirect('/');

    },

}

module.exports = userController;