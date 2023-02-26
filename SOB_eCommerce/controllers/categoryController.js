const db = require('../database/models');

const categoryController = {
    list: () => {
        db.Category.findAll( {
            where:{deleted_at: null}
        })
        .then( categories => {
            return categories;
        })
        .catch( err => {
            console.log('Error al buscar las categorías: ' + err);
        })

    },

}

module.exports = categoryController;