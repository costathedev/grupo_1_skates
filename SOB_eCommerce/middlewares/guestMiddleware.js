function guestMiddleware (req,res,next){
    if(!req.session.userLogged){
        return res.redirect ('/register')
    }
    next()
}

module.exports = guestMiddleware
