function guestMiddleware (req,res,next){
    console.log('guestMiddleware: userLogged ' + req.session.userLogged)
    if(req.session.userLogged){
        return res.redirect ('/')
    }
    next()
}

module.exports = guestMiddleware
