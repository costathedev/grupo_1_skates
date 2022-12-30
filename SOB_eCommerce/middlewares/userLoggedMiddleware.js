const User = require('../data/users');

function userLoggedMiddleware(req, res, next) {
    // res.local.isLogged = false;

    /* Agregado de flor para cookie recordación */
    /* Inicia acá */
    let emailInCookie = req.cookies.email;
    let userFromCookie = User.findByField('email', emailInCookie);

    console.log('UserFromCookie: ' + userFromCookie);

    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }
    /* Y llega hasta acá */

    if (!req.session.userLogged) {
        // res.locals.isLogged = true;
        // res.locals.userLogged = req.session.userLogged;
        return res.redirect('/user/login');

    }
    else {
        next();
    }
}

module.exports = userLoggedMiddleware;