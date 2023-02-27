// const User = require('../data/users');
const path = require('path');
const fs = require('fs');
const rutaUsersJson = path.resolve('./data/users.json');
const db = require('../database/models');

// Ya no se usa el Json de Usuarios:
// let users = [];
// function loadUsers() {
//     let usersFile = fs.readFileSync(rutaUsersJson, 'utf-8');
//     users = JSON.parse(usersFile);
// } 

function userLoggedMiddleware(req, res, next) {
    // res.local.isLogged = false;

    /* Agregado de flor para cookie recordación */
    /* Inicia acá */
    let emailInCookie = "";
    emailInCookie = req.cookies.email;
    //let userFromCookie; //= User.findByField('email', emailInCookie);

    if (emailInCookie) {
        // loadUsers();
        // userFromCookie = users.find( u => u.email.toLowerCase() == emailInCookie.toLowerCase() );
        db.User.findOne( {where: {email: emailInCookie}})
        .then(userFromCookie => {
            console.log('UserFromCookie: ' + userFromCookie);

                req.session.userLogged = userFromCookie;
            /* Y llega hasta acá */
        })
        .catch(err => {
            console.log('Error al levantar usuario logueado de la cookie: ' + err)
        })
    }
    
    // Preguntar si el usuario está logueado. Si está, se le permite continuar. Si no, se lo manda al login.
    if (!req.session.userLogged) {
        return res.redirect('/user/login');
    }
    else {
        next();
    }
}

module.exports = userLoggedMiddleware;