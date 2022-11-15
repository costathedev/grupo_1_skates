const productController = {    
    productofunction: function(req, res) {
        res.render('products/productDetail')
    },

    altaproducto: function(req, res) {
        res.render('products/altaProducto')
    },

    editproduct: (function(req, res) {
        res.render('products/editProduct')
    }),
    
    carroDeCompras: (function(req, res) {
        res.render('products/carrodecompras')
    }),
}

module.exports = productController;
