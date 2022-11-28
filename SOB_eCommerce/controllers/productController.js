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

    // Caro: Agrego para que no dé error, luego completar:
    index: (function(req, res) {}),
    saveNewProduct: (function(req, res) {}),
    saveEditedProduct: (function(req, res) {}),
    deleteProduct: (function(req, res) {}),
}

module.exports = productController;
