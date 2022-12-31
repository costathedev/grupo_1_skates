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
            res.render('products/productDetail', {product, userLogged: req.session.userLogged})
        } 
    
    },


    newProduct: function(req, res) {
        console.log('newProduct. URL:', req.url);
      
        res.render('products/altaProducto', { userLogged: req.session.userLogged})
    },

    searchProductsByCategory: function(req, res) {
        console.log('searchProductsByCategory. URL:', req.url);

        // Por ahora usamos para filtrar categorias
        let category = "";
        category = req.params.category;
        console.log('Categoria: '+ category);
        loadProducts(); 
        let searchedProducts = products.filter(product => product.category && product.category.toLowerCase() == category.toLowerCase());

        res.render('products/searchedProducts', {category, products: searchedProducts, userLogged: req.session.userLogged});
    },


    searchProducts: function(req, res) {
        console.log('searchProducts. URL:', req.url);

        // esto no anda
        let search = req.query.search;
        console.log('Query:', search);
        loadProducts()
        let searchedProducts = products.filter(product => product.name && (product.name.toLowerCase().includes(search.toLowerCase()) 
                            || product.name.toLowerCase().includes(search.toLowerCase())));

        res.render('products/searchedProducts', {products: searchedProducts, userLogged: req.session.userLogged});
    },


    editProduct: function(req, res){
        console.log('editProduct. URL:', req.url);
        let id = req.params.id;
        console.log("Editando: ", id, "Ruta: ", rutaProductJson)
        loadProducts();
        let product = products.find( product => product.id == id );
        if (product != undefined && product.id>0 ){
            res.render('products/altaProducto', {product, userLogged: req.session.userLogged})
        } 
        else {
            res.send('No se encontró el producto ' + id)
        }
    },
    

    carroDeCompras: (function(req, res) {
        console.log('carroDeCompras. URL:', req.url);
        let cartProducts = [];
        if (req.session.cartProducts) {
            console.log('Hay productos en session: ' + req.session.cartProducts);
            loadProducts();
            for (let i = 0; i < req.session.cartProducts.length; i++) {
                console.log('Producto Id: ' +  req.session.cartProducts[i]);
                let product = products.find( p => p.id == req.session.cartProducts[i]);
                if (product) {
                    console.log('Encontro Producto Id: ' +  product.id + ' ' + product.name);
                    cartProducts.push(product);
                }
            }
        }
        console.log('Se van a mostrar en el carrito: ' + cartProducts);
        res.render('products/carrodecompras', {products: cartProducts, userLogged: req.session.userLogged})
    }),
  
    
    index: function(req, res){
        console.log('index. URL:', req.url);
        loadProducts();
        res.render('products/list', {products, userLogged: req.session.userLogged})
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

    addToCart: function (req, res) {
        console.log('addToCart. URL:', req.url);

        let id = req.params.id;
        console.log('Producto a agregar id: ' + id);
        
        if (!req.session.cartProducts) {
            req.session.cartProducts = [];
        }
        req.session.cartProducts.push(id);
        console.log('Productos en Carrito: ' + req.session.cartProducts)
        res.redirect('/product/carrodecompras')

    }
}

module.exports = productController;
