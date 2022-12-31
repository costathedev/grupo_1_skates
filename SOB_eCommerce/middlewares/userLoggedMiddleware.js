const User = require('../data/users');
const path = require('path');
const fs = require('fs');
const rutaUsersJson = path.resolve('./data/users.json');

let users = [];

function loadUsers() {
    let usersFile = fs.readFileSync(rutaUsersJson, 'utf-8');
    users = JSON.parse(usersFile);
} 

function userLoggedMiddleware(req, res, next) {
    // res.local.isLogged = false;

    /* Agregado de flor para cookie recordación */
    /* Inicia acá */
    let emailInCookie = "";
    emailInCookie = req.cookies.email;
    let userFromCookie; //= User.findByField('email', emailInCookie);

    if (emailInCookie) {
        loadUsers();
        userFromCookie = users.find( u => u.email.toLowerCase() == emailInCookie.toLowerCase() );
        // if (emailInCookie == "carolinabubenik@gmail.com") {
        //     userFromCookie = {
        //         firstName: "Carolina",
        //         lastName: "Admin",
        //         roles: ['ADMIN'],
        //     }
        // }
        // else {
        //     userFromCookie = {
        //         firstName: "Usuario",
        //         lastName: "Comun",
        //         roles: [],
        //     }
        // }

        console.log('UserFromCookie: ' + userFromCookie);

        if (userFromCookie){
            req.session.userLogged = userFromCookie;
        }
        /* Y llega hasta acá */

    }
    

    if (!req.session.userLogged) {
        return res.redirect('/user/login');
    }
    else {
        next();
    }
}

module.exports = userLoggedMiddleware;