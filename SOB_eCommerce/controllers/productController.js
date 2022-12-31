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
    getProductsHome: function () {
        // Buscamos los productos que tienen alguna seccion configurada. Hoy es solo ELEGIDOS, podrian haber otras.
        loadProducts();
        let productsHome = products.filter( product => product.section);
        console.log('HOME: Se van a mostrar ' + productsHome.count + ' productos.');
        return productsHome;
    },

    productDetail: function(req, res){
        console.log('productDetail. URL:', req.url);
        let id = req.params.id;
        let product = products.find( product => product.id == id);
        if (product){
            res.render('products/productDetail', {product})
        } 
    
    },


    newProduct: function(req, res) {
        console.log('newProduct. URL:', req.url);
      
        res.render('products/altaProducto')
    },

    searchProductsByCategory: function(req, res) {
        console.log('searchProductsByCategory. URL:', req.url);

        // Por ahora usamos para filtrar categorias
        let category = "";
        category = req.params.category;
        console.log('Categoria: '+ category);
        loadProducts(); 
        let searchedProducts = products.filter(product => product.category && product.category.toLowerCase() == category.toLowerCase());

        res.render('products/searchedProducts', {category, products: searchedProducts});
    },


    searchProducts: function(req, res) {
        console.log('searchProducts. URL:', req.url);

        // esto no anda
        let category = req.query.search;
        loadProducts()
        let searchedProducts = products.filter(product => product.name.toLowerCase().contains(search.toLowerCase()) 
                            || product.name.toLowerCase().contains(search.toLowerCase()));

        res.render('products/searchedProducts', {products: searchedProducts});
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
