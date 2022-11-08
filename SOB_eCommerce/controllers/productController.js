const productController = {    
    productofunction: function(req, res) {
        res.render('products/productDetail')
    },

    altaproducto: function(req, res) {
        res.render('products/altaProducto')
    }

}

module.exports = productController;