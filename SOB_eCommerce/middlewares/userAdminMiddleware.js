
function userAdminMiddleware(req, res, next) {
 
    console.log('AdminMiddleware')

    // Si esta logueado y es admin, permite continuar
    if (req.session.userLogged) {   
        console.log('Esta logueado: ' + req.session.userLogged)

        if (req.session.userLogged.roles.find(role => role.name == "ADMIN")) {
            console.log('Es admin')
            next();
            return;
        }  
    }

    // Si no era logueado y admin, se redirecciona al home
    return res.redirect('/');
    
}

module.exports = userAdminMiddleware;