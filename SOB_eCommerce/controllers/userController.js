const path = require('path');
const fs = require('fs');

const rutaUsersJson = path.resolve('./data/users.json');

let users = [];

function loadUsers() {
    let usersFile = fs.readFileSync(rutaUsersJson, 'utf-8');
    users = JSON.parse(usersFile);
} 

function writeUsers() {
    const fs = require('fs');
    console.log('Por escribir', users.length, 'usuarios')
    fs.writeFileSync(rutaUsersJson , JSON.stringify(users))
}

const userController = {
    login: function(req, res) {
        console.log('Login. URL:', req.url);
        res.render('users/login');
        return;
    },

    register: function(req, res) {
        console.log('register. URL:', req.url);
        res.render('users/register');
    },

    index: function(req, res){
        console.log('index. URL:', req.url);
        loadUsers();
        res.render('users/list', {users})
    },

    userDetail: function(req, res){
        console.log('userDetail. URL:', req.url);
        let id = req.params.id;

        let user = users.find( user => user.id == id);
        if (user){
            res.render('users/register', {user, readOnly: true})
        } 
    },

    editUser: function(req, res){
        console.log('editUser. URL:', req.url);
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
        console.log('saveNewUser. URL:', req.url);
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
        console.log('saveEditedUser. URL:', req.url);
        loadUsers();
        let id = req.params.id;
        let user = users.find( user => user.id == id );
        if (user) {
            user.apellido = req.body.apellido;
            console.log('Encontro el usuario a editar: ', user.apellido);
            user.email = req.body.email;
            user.domicilio = req.body.domicilio;
            user.fecha_nacimiento = req.body.fecha_nacimiento;
            user.contraseña = req.body.contraseña;

            users = users.filter( u => u.id != id);
            users.push(user);

            writeUsers();

            res.redirect('/');
        }
        else {
            console.log('NO encontró el usuario a editar: ');
        }
        
    },

    deleteUser: function(req, res){
        console.log('deleteUser. URL:', req.url);
        loadUsers();
        let id = req.params.id;
        users = users.filter( user => user.id !== id);
        writeUsers();

        res.redirect('/');

    },

}

module.exports = userController;