const fs = require('fs');
const path = require('path');

const rutaProductJson = path.resolve('./data/products.json');

// let productFile = fs.readFileSync(rutaProductJson, 'utf-8');
// let product = JSON.parse(productFile);

let products = [ ];
  

function loadProducts() {
    let productsFile = fs.readFileSync(rutaProductJson, 'utf-8');
    products = JSON.parse(productsFile);
};


function writeProducts() {
    const fs = require('fs');
    console.log('Por escribir', products.length, 'productos')
    fs.writeFileSync(rutaProductJson , JSON.stringify(products))
};


const productController = {    
    productDetail: function(req, res){
        console.log('productDetail. URL:', req.url);
        let id = req.params.id;
        let product = products.find( product => product.id == id);
        if (product){
            res.render('product/register', {product, readOnly: true})
        } 
    
    },


    newProduct: function(req, res) {
        console.log('newProduct. URL:', req.url);
      
        res.render('products/altaProducto')
    },


    editProduct: function(req, res){
        console.log('editProduct. URL:', req.url);
        let id = req.params.id;
        console.log("Editando: ", id, "Ruta: ", rutaProductJson)
        loadProducts();
        let product = products.find( product => product.id == id );
        if (product != undefined && product.id>0 ){
            res.render('products/altaProducto', {product})
        } 
        else {
            res.send('No se encontró el producto ' + id)
        }
    },
    

    carroDeCompras: (function(req, res) {
        res.render('products/carrodecompras')
    }),
  
    
    index: function(req, res){
        console.log('index. URL:', req.url);
        loadProducts();
        res.render('products/list', {products})
    }, 
    
    saveNewProduct: function(req, res){
        console.log('saveNewProduct. URL:', req.url);
        let product = req.body;
        loadProducts();
        let maxId = 0;
        products.forEach ( product => product.id > maxId ? maxId = product.id : '');
        product.id = maxId + 1;

        products.push(product);
        
        writeProducts();

        res.redirect('/product');
        
    },

    saveEditedProduct:  function(req, res){
        console.log('saveEditedProduct. URL:', req.url);
        loadProducts();
        let id = req.params.id;
        let product = products.find( product => product.id == id );
        if (product) {
            console.log('Name del body: ' + req.body.name)
            product.name = req.body.name;
            console.log('Encontro el producto a editar: ', product.name);
            product.description = req.body.description;
            product.image = req.body.image;
            product.category = req.body.category;
            product.size = req.body.size;
            product.color = req.body.color;
            product.price = req.body.price;

            products = products.filter( u => u.id != id);
            products.push(product);

            writeProducts();

            res.redirect('/product/');
        }
        else {
            console.log('NO encontró el producto a editar: ');
        }
        
    },


    deleteProduct: function(req, res){
        console.log('deleteProduct. URL:', req.url);
        loadProducts();
        let id = req.params.id;
        products = products.filter( product => product.id != id);
        writeProducts();

        res.redirect('/product');

    },
}

module.exports = productController;
