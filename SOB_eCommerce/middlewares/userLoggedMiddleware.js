function userLoggedMiddleware(req, res, next) {
    // res.local.isLogged = false;

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