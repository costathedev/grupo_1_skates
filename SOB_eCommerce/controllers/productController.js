const fs = require('fs');
const path = require('path');

const rutaProductJson = path.resolve('../data/products.json');

let productFile = fs.readFileSync(rutaProductJson, 'utf-8');
// let product = JSON.parse(productFile);

let products = [
    {id: 1, description:'remera 1'},
    {id: 2, description:'remera 2'},
    {id: 3, description:'remera 3'},
    {id: 4, description:'remera 4'},
    {id: 5, description:'remera 5'}
]

const productController = {    
    productDetail: function(req, res) {
        res.render('products/productDetail')
    },

    newProduct: function(req, res) {
      
        res.render('products/altaProducto')
    },

    editProduct: (function(req, res) {
        let id = req.params.id;
        let product = products.find( product => product.id == id)
        if (product){
            res.render('product/editProduct', {product})

        }
    }),
    
    carroDeCompras: (function(req, res) {
        res.render('products/carrodecompras')
    }),

    
    index: (function(req, res) {
        res.render()
    }), 

    saveNewProduct: (function(req, res) {
        let product = req.body;
        let maxId = 0;
        products.forEach ( product => product.id > maxId ? maxId = product.id : '' );
        product.id = maxId + 1
        products.push(product)
        fs.writeFileSync(rutaProductJson ,JSON.stringify(products))

        res.redirect('/')

    }),

    saveEditedProduct: (function(req, res) {
        let id = req.params.id;
        let product = product.find( product => product.id === id)
        if (product) {
            product.description = req.body.description;

            products = products.filter( product => product.id !== id);
            products.push(product)
            fs.writeFileSync(rutaProductJson ,JSON.stringify(products))

            res.redirect('/')
        }

    }),


    deleteProduct: (function(req, res) {
        let id = req.params.id;
        products = products.filter( product => product.id !== id);
        fs.writeFileSync(rutaProductJson ,JSON.stringify(products))
        res.redirect('/')
        
    }),
}

module.exports = productController;
