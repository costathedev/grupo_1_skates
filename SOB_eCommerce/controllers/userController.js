const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const e = require('express');
const { validationResult } = require('express-validator');


const db = require('../database/models');
const { Association } = require('sequelize');
const Op = db.Sequelize.Op;

const rutaUsersJson = path.resolve('./data/users.json');

// Ya no se usa el Json de usuarios
// let users = [];

// BORRAR
// function loadUsers() {
//     let usersFile = fs.readFileSync(rutaUsersJson, 'utf-8');
//     users = JSON.parse(usersFile);
// } 

// BORRAR
// function writeUsers() {
//     const fs = require('fs');
//     console.log('Por escribir', users.length, 'usuarios')
//     fs.writeFileSync(rutaUsersJson , JSON.stringify(users))
// }

const userController = {
    showLogin: function (req, res) {
        console.log(req.session)
        console.log('ShowLogin. URL:', req.url);
        return res.render('users/login')// , {userLogged: req.session.userLogged});
    },

    login: function (req, res) {
        console.log('Login. URL:', req.url);
        let userName = req.body.email;
        console.log('Quiere loguearse: ' + userName + " | " + req.body.password)

        let accesoOk = false;

        // let user = users.find( u => u.email.toLowerCase() == userName.toLowerCase() );
        db.User.findOne({
            where: {
                email: userName
            },
            include: [{ association: 'roles' }]
        }).then(user => {
            console.log('Encontro el usuario');
            if (user != undefined && user.id > 0) {
                console.log('Va a comparar password: ' + user.password + ' con: ' + bcrypt.hashSync(req.body.password, 10));
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    accesoOk = true;
                    delete user.password;  // no me toma! sigue estando el password
                    req.session.userLogged = user;
                    req.session.cartProducts = [];

                    console.log('EStas loguado: ******************')
                    console.log(req.session)

                    //Si el usuario se loguea correctamente, seteo la cookie para recordar al usuario por 5 (decia 2) minutos.
                    if (req.body.remember_user) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 6) * 5 });
                    }

                    return res.redirect('/');
                }
            }
            if (!accesoOk) {
                return res.render('users/login', { mensaje: 'El usuario o la contraseña son incorrectos.' })// , userLogged: req.session.userLogged});
            }
        })
            .catch(err => {
                console.log('Dio error al buscar el usuario');
                res.send(err);
            }
            )

    },

    logOut: function (req, res) {
        res.clearCookie('userEmail');
        // req.session.userLogged = null;
        // req.session.cartProducts = [];
        req.session.destroy();
        return res.redirect('/');
    },

    register: function (req, res) {
        console.log('register. URL:', req.url);
        return res.render('users/register')//, {userLogged: req.session.userLogged});
    },

    create: function (req, res) {
        console.log('create. URL:', req.url);
        return res.render('users/register', { backToList: true })// , userLogged: req.session.userLogged});
    },

    index: function (req, res) {
        console.log('index. URL:', req.url);
        // BORRAR
        // loadUsers();
        db.User.findAll(
            {
                include: [{ association: 'roles' }],
                //     where:{
                //         deleted_at: null,
                //     }         
            }
        ).then(users => {
            return res.render('users/list', { users })// , userLogged: req.session.userLogged})
        })
    },

    profile: function (req, res) {
        console.log('index. URL:', req.url);
        return res.render('users/profile', { user: req.session.userLogged })// , userLogged: req.session.userLogged})
    },

    userDetail: function (req, res) {
        console.log('userDetail. URL:', req.url);
        let id = req.params.id;

        // let user = users.find( user => user.id == id);
        db.User.findByPk(id, {
            include: [{ association: 'roles' }]
        })
            .then(user => {
                if (user) {
                    return res.render('users/register', { user, readOnly: true })// , userLogged: req.session.userLogged})
                }
                else {
                    return res.send('No se encontró el usuario ' + id)
                }
            }
            )
    },

    editUser: function (req, res) {
        console.log('editUser. URL:', req.url);
        let id = req.params.id;
        console.log("Editando: ", id, "Ruta: ", rutaUsersJson)

        // BORRAR
        // loadUsers();
        // let user = users.find( user => user.id == id );
        db.User.findByPk(id, {
            include: [{ association: 'roles' }],
        })
            .then(user => {
                if (user != undefined && user.id > 0) {
                    return res.render('users/register', { user })// , userLogged: req.session.userLogged})
                }
                else {
                    return res.send('No se encontró el usuario ' + id)
                }
            })

    },

    saveNewUser: function (req, res) {
        console.log('saveNewUser. URL:', req.url);

        console.log('REQUEST :::::::::::::::::::::::::::::::::::::::::::::::::::');
        console.log(req);

        // desde aca

        //En esta variable guardo lo enviado desde la ruta, con respecto a los errores encontrados en la carga de los datos por parte del usuario
        let errors = validationResult(req);
        console.log('ERRORES DE VALIDACIONESSSSSSSSSSSSSSSSSSSSSS');
        console.log(errors);
        //return res.send(errors); ???

        //Aquí determino si hay ó no errores encontrados
        if (!errors.isEmpty()) {
            return res.render('users/register', { //path.resolve(__dirname, '../views/users/register'), {
                errors: errors.errors, old: req.body
            });
        }



        console.log('Va a guardar el password: ' + req.body.password + ' como: ' + bcrypt.hashSync(req.body.password, 10));


        let user = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: bcrypt.hashSync(req.body.password, 10),
            birthDate: req.body.birthDate,
            avatar: req.file ? req.file.filename : 'default.png',
            address: req.body.address,
        };

        db.User.create(user)
            .then(storedUser => {

                console.log('Guardó el usuario en la BD');

                if (req.backToList) {
                    return // no se cambia el usuario logueado, se redirecciona al listado
                    return res.redirect('/user');
                }
                else {
                    // registrar la sesion iniciada y enviar a la Home logueado
                    delete user.password;
                    req.session.userLogged = user;
                    req.session.cartProducts = [];
                    console.log('registra en session el usuario logueado: ' + req.session.userLogged);
                    return res.redirect('/');
                }

            })
            .catch(error => console.log(error));

    },

    saveEditedUser: function (req, res) {
        console.log('saveEditedUser. URL:', req.url);


        // BORRAR
        // let id = req.params.id;
        // loadUsers();
        // let user = users.find( user => user.id == id );

        let newPass = req.body.password ? bcrypt.hashSync(req.body.password, 10) : '';


        db.User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            address: req.body.address,
            birth_date: req.body.birthDate,
            firstName: req.body.firstName,
            // avatar: req.file ? req.file : (avatar ?avatar : 'default.png'),
            // password: newPass ? newPass : password,
        },
            {
                where: { id: req.params.id }
            }
        )
            .catch(err => {
                console.log('NO encontró el usuario a editar ');
            }
            )


        // users = users.filter( u => u.id != id);
        // users.push(user);

        // BORRAR
        // writeUsers();

        return res.redirect('/');


    },

    deleteUser: function (req, res) {
        console.log('deleteUser. URL:', req.url);


        // BORRAR
        // let id = req.params.id;
        // loadUsers();
        // users = users.filter( user => user.id != id);

        db.User.update({ deleted_at: new Date() }, {
            where: { id: req.params.id }
        })

        // BORRAR
        // writeUsers();

        return res.redirect('/user');

    },



}

module.exports = userController;