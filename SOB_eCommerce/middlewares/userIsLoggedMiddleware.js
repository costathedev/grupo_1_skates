function userIsLoggedMiddleware(req, res, next) {
    console.log('Entro a userIsLoggedMiddleware');

    // no entiendo si tiene que ser mw de app o de ruta...
    if (req.session.userLogged){
        console.log('Esta logueado')
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userIsLoggedMiddleware;