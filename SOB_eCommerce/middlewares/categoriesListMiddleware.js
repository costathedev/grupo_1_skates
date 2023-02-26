const db = require('../database/models');

function categoriesListMiddleware(req, res, next) {
    if (!res.locals.categories) {
        db.Category.findAll( {
            where:{deleted_at: null}
        })
        .then( categories => {
            res.locals.categories = categories;
            console.log('Categorias de variable locals.categories: ');
            console.log(res.locals.categories);
        })
        .catch( err => {
            console.log('Error al buscar las categorías: ' + err);
        })
    }
    next();
};

module.exports = categoriesListMiddleware;