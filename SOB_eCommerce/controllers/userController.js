const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const e = require('express');

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
    showLogin: function(req, res) {
        console.log('ShowLogin. URL:', req.url);
        res.render('users/login');
        return;
    },

    login: function(req, res) {
        console.log('Login. URL:', req.url);
        let userName = req.body.email;
        loadUsers();
        console.log('Quiere loguearse: ' + userName +  " | " + req.body.password)
        let user = users.find( u => u.email.toLowerCase() == userName.toLowerCase() );
        let accesoOk = false; 
        if (user != undefined && user.id>0 ){
            if (bcrypt.compareSync(req.body.password, user.password)) {
                accesoOk = true; 
                delete user.password;
                req.session.userLogged = user;

                //Si el usuario se loguea correctamente, seteo la cookie para recordar al usuario por 2 minutos.
                if(req.body.remember_user){
                    res.cookie('email', req.body.email, {maxAge: (1000 * 6) * 2});
                }

                res.redirect('/');
            } 
        }
        if (!accesoOk){
            res.render('users/login', {mensaje: 'El usuario o la contraseña son incorrectos.'});
        }

    },

    logOut: function(req, res) {
        req.session.userLogged = null;
        res.redirect('/');
    },

    register: function(req, res) {
        console.log('register. URL:', req.url);
        res.render('users/register');
    },

    create: function(req, res) {
        console.log('create. URL:', req.url);
        res.render('users/register', {backToList: true});
    },

    index: function(req, res){
        console.log('index. URL:', req.url);
        loadUsers();
        res.render('users/list', {users})
    },

    profile: function(req, res) {
        console.log('index. URL:', req.url);
        res.render('users/profile', {user: req.session.userLogged})
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
            res.send('No se encontró el usuario ' + id)
        }
    },

    saveNewUser: function(req, res){
        console.log('saveNewUser. URL:', req.url);
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            birth_date: req.body.birth_date,
            avatar: req.file ? req.file.filename : 'default.png',
            address: req.body.address,
            password: bcrypt.hashSync(req.body.password, 10),
        };
        loadUsers();
        let maxId = 0;
        users.forEach ( user => user.id > maxId ? maxId = user.id : '');
        user.id = maxId + 1;

        users.push(user);
        
        writeUsers();

        if (req.backToList) {
            // no se cambia el usuario logueado, se redirecciona al listado
            res.redirect('/user');
        }
        else {
            // registrar la sesion iniciada y enviar a la Home logueado
            delete user.password;
            req.session.userLogged = user;
            console.log('registra en session el usuario logueado: ' + req.session.userLogged);
            res.redirect('/');
        }   
 
    },

    saveEditedUser: function(req, res){
        console.log('saveEditedUser. URL:', req.url);
        loadUsers();
        let id = req.params.id;
        let user = users.find( user => user.id == id );
        if (user) {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            console.log('Encontro el usuario a editar: ', user.lastName);
            user.email = req.body.email;
            user.address = req.body.address;
            user.birth_date = req.body.birth_date;

            // user.avatar = req.file ? req.file.filename : 'default.png';
            if (req.file){
                user.avatar = req.file;
            }
            else {
                if (!user.avatar){
                    user.avatar = 'default.png';
                }
            }

            if (req.body.password){
                user.password = bcrypt.hashSync(req.body.password, 10);
                console.log('Guardando password encriptada: ' + user.password )
            }


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
        users = users.filter( user => user.id != id);
        writeUsers();

        res.redirect('/user');

    },

}

module.exports = userController;