const productController = {    
    productDetail: function(req, res) {
        res.render('products/productDetail')
    },

    newProduct: function(req, res) {
        res.render('products/altaProducto')
    },

    editProduct: (function(req, res) {
        res.render('products/editProduct')
    }),
    
    carroDeCompras: (function(req, res) {
        res.render('products/carrodecompras')
    }),
}

module.exports = productController;
