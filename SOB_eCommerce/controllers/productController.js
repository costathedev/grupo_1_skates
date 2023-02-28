const { Console } = require('console');
const { validationResult } = require('express-validator')
const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const rutaProductJson = path.resolve('./data/products.json');
const Op = db.Sequelize.Op;

// let productFile = fs.readFileSync(rutaProductJson, 'utf-8');
// let product = JSON.parse(productFile);

let products = [];


// function loadProducts() {
//     let productsFile = fs.readFileSync(rutaProductJson, 'utf-8');
//     products = JSON.parse(productsFile);
// };


// function writeProducts() {
//     const fs = require('fs');
//     console.log('Por escribir', products.length, 'productos')
//     fs.writeFileSync(rutaProductJson , JSON.stringify(products))
// };


const productController = {


    productDetail: function (req, res) {
        console.log('productDetail id: ' + req.params.id + '. URL:', req.url);


        db.Product.findByPk(req.params.id, {
            include: [{ association: 'Category' }]

        }).then(product => {
            console.log('Encontro el product');
            if (product != undefined && product.id > 0) {
                return res.render('products/productDetail', { product, userLogged: req.session.userLogged })

            }

        })
            .catch(err => {
                console.log('Dio error al buscar el producto ' + err);
                res.send(err);
            }
            )


        // let product = products.find( product => product.id == id);
        // if (product){
        //   return  res.render('products/productDetail', {product, userLogged: req.session.userLogged})
        // } 

    },


    newProduct: function (req, res) {
        console.log('newProduct. URL:', req.url);

        return res.render('products/altaProducto', { userLogged: req.session.userLogged })
    },

    searchProductsByCategory: function (req, res) {
        console.log('searchProductsByCategory. URL:', req.url);

        // Por ahora usamos para filtrar categorias
        let categoryParam = "";
        categoryParam = req.params.category;
        console.log('Categoria: ' + categoryParam);

        // loadProducts(); 
        // let searchedProducts = products.filter(product => product.category && product.category.toLowerCase() == category.toLowerCase());
        // return res.render('products/searchedProducts', {category, products: searchedProducts, userLogged: req.session.userLogged});


        db.Category.findOne(
            {
                where: {name: categoryParam, deleted_at: null}
            }
        ).then( cat => {

            db.Category.findAll( {where: { parent_category_id: cat.id, deleted_at: null }})
            .then( lstCatHijas => {
                let arrCatIds = [];
                arrCatIds.push(cat.id);
                lstCatHijas.every( c => arrCatIds.push(c.id));


                db.Product.findAll(
                    {
                        include: [{association: 'Category'}],
                        where: {
                            category_id: {[Op.in]: arrCatIds},
                            deleted_at: null
                        },
                    }
                ).then(searchedProducts => {
                    return res.render('products/searchedProducts', { category: cat.name, products: searchedProducts, userLogged: req.session.userLogged });
       
                })
                    .catch(err => {
                        console.log('Dio error al buscar los productos de la categoría ' + err);
                        res.send(err);
                })


            })
            .catch( err => {
                console.log('Dio error al buscar las categorías hijas: ' + err);
            })



            
        })
        .catch( err => {
            console.log('No se pudo filtrar por categoría. Error: ' + err);
        })

    },


    searchProducts: function (req, res) {
        console.log('searchProducts. URL:', req.url);

        // esto no anda
        let search = req.query.search;
        console.log('Query:', search);
        // loadProducts()
        // let searchedProducts = products.filter(product => product.name && (product.name.toLowerCase().includes(search.toLowerCase()) 
        //                     || product.name.toLowerCase().includes(search.toLowerCase())));

        // return res.render('products/searchedProducts', {products: searchedProducts, userLogged: req.session.userLogged});

        db.Product.findAll(
            {
                // include: [{association: 'categories'}],
                where: {
                    [Op.or]: [{ name: { [Op.like]: '%' + search + '%' } }, { description: { [Op.like]: '%' + search + '%' } }],
                    deleted_at: null
                }
            }
        ).then(searchedProducts => {
            return res.render('products/searchedProducts', { products: searchedProducts, userLogged: req.session.userLogged });

        })
            .catch(err => {
                console.log('Dio error al buscar los productos para la búsqueda ' + err);
                res.send(err);
            })

    },


    editProduct: function (req, res) {
        console.log('editProduct. URL:', req.url);
        // console.log("Editando: ", req.params.id, "Ruta: ", rutaProductJson)
        // loadProducts();
        // let product = products.find( product => product.id == id );
        // if (product != undefined && product.id>0 ){
        //     return res.render('products/altaProducto', {product, userLogged: req.session.userLogged})
        // } 
        // else {
        //    return res.send('No se encontró el producto ' + id)
        // }
        db.Product.findByPk(req.params.id, {
            include: [{ association: 'Category' }]

        }).then(product => {
            console.log('Encontro el product');
            if (product != undefined && product.id > 0) {
                console.log('EDITA PRODUCTO')
                console.log(product.category_id)
                return res.render('products/altaProducto', { product, userLogged: req.session.userLogged })
            }
            else {
                return res.send('No se encontró el producto ' + req.params.id)
            }

        })
            .catch(err => {
                console.log('No se encontró el producto ' + req.params.id + ' Error: ' + err);
                res.send(err);
            }
            )

    },


    carroDeCompras: (function (req, res) {
        // FALTA !!!!!!!!!!!!!!
        console.log('carroDeCompras. URL:', req.url);
        let cartProducts = [];
        if (req.session.cartProducts) {
            console.log('Hay productos en session: ' + req.session.cartProducts);
            // loadProducts();
            db.Product.findAll({
                where: {
                    id: {[Op.in]: req.session.cartProducts}
                }
            })
            .then( products => {
                cartProducts = products;
            return res.render('products/carrodecompras', { products: cartProducts, userLogged: req.session.userLogged })

            })
            .catch(err => console.log('No se pudieron mostrar los productos del carrito: ' + err))

            
            // for (let i = 0; i < req.session.cartProducts.length; i++) {
            //     console.log('Producto Id: ' + req.session.cartProducts[i]);
            //     let product = products.find(p => p.id == req.session.cartProducts[i]);
            //     if (product) {
            //         console.log('Encontro Producto Id: ' + product.id + ' ' + product.name);
            //         cartProducts.push(product);
            //     }
            // }
        }
        // console.log('Se van a mostrar en el carrito: ' + cartProducts);
        // return res.render('products/carrodecompras', { products: cartProducts, userLogged: req.session.userLogged })
    }),


    index: function (req, res) {
        console.log('index. URL:', req.url);
        // loadProducts();
        // return  res.render('products/list', {products, userLogged: req.session.userLogged})

        db.Product.findAll(
            {
                include: [{ association: 'Category' }],
                where: { deleted_at: null },
            }
        ).then(products => {
            return res.render('products/list', { products, userLogged: req.session.userLogged })
        })
            .catch(err => {
                console.log('Dio error al buscar los productos');
                res.send(err);
            })
    },

    saveNewProduct: function (req, res) {
        console.log('saveNewProduct. URL:', req.url);
        // console.log('Name: ' + req.body.name);

        console.log('Body Name: ');
        console.log(req.body.name);
        // let product = req.body;
        // loadProducts();
        // let maxId = 0;
        // products.forEach ( product => product.id > maxId ? maxId = product.id : '');
        // product.id = maxId + 1;
        // products.push(product);
        // writeProducts();
        // return  res.redirect('/product');


        //En esta variable guardo lo enviado desde la ruta, con respecto a los errores encontrados en la carga de los datos por parte del usuario
        let errors = validationResult(req);


        //Aquí determino si hay ó no errores encontrados
        if (errors.isEmpty()) {
            //   return res.render(path.resolve(__dirname, '../views/usuarios/registro'), {
            //     errors: errors.errors,  old: req.body
            //   });
            // } 
            // section: req.body.section,
            let product = {
                name: req.body.name,
                description: req.body.description,
                model: req.body.model,
                price: req.body.price,
                brand_id: req.body.brand_id != null ? req.body.brand_id : 1,
                category_id: req.body.category_id != null ? req.body.category_id : 1,
                image: req.file ? req.file.filename : 'default.png',
            };

            db.Product.create(product)
                .then(storedProduct => {
                    return res.redirect('/product');
                })
                .catch(error => console.log(error));

        } else {

            res.render('products/altaProducto', {
                errors: errors.mapped(),
                old: req.body

            });
            //{ userLogged: req.session.userLogged})

        }
    },


    saveEditedProduct: function (req, res) {
        console.log('saveEditedProduct. URL:', req.url);
        // loadProducts();
        // let id = req.params.id;
        // let product = products.find( product => product.id == id );
        // if (product) {
        //     console.log('Name del body: ' + req.body.name)
        //     product.name = req.body.name;
        //     console.log('Encontro el producto a editar: ', product.name);
        //     product.description = req.body.description;
        //     product.image = req.body.image;
        //     product.category = req.body.category;
        //     product.size = req.body.size;
        //     product.color = req.body.color;
        //     product.price = req.body.price;

        //     products = products.filter( u => u.id != id);
        //     products.push(product);

        //     writeProducts();

        //     return res.redirect('/product/');
        // }
        // else {
        //     console.log('NO encontró el producto a editar: ');
        // }

        //En esta variable guardo lo enviado desde la ruta, con respecto a los errores encontrados en la carga de los datos por parte del usuario
        let errors = {}; // validationResult(req); HACER!!
        //return res.send(errors); ???

        //Aquí determino si hay ó no errores encontrados
        // if(!errors.isEmpty()) {
        //   return res.render(path.resolve(__dirname, '../views/usuarios/registro'), {
        //     errors: errors.errors,  old: req.body
        //   });
        // } 


        db.Product.findByPk(req.params.id)
            .then(prodAnt => {
                db.Product.update({
                    name: req.body.name,
                    description: req.body.description,
                    model: req.body.model,
                    price: req.body.price,
                    category_id: req.body.category_id,
                    brand_id: req.body.brand_id,
                    image: req.file ? req.file.filename : (prodAnt.image ? prodAnt.image : 'default.png'),
                },
                    {
                        where: { id: req.params.id }
                    }
                )
                    .then(producto => {
                        console.log('guardó el producto editado.')
                        return res.redirect('/product/');
                    })

                    .catch(err => {
                        console.log('NO encontró el producto a editar. Error: ' + err);
                    }
                    )
            })
            .catch(err => {
                console.log('NO se pudo editar el producto. Error: ' + err);
            })




    },


    deleteProduct: function (req, res) {
        console.log('deleteProduct. URL:', req.url);
        // loadProducts();
        // let id = req.params.id;
        // products = products.filter( product => product.id != id);
        // writeProducts();

        // return res.redirect('/product');

        db.Product.destroy({
            where: { id: req.params.id }
        })
            .then(product => {
                return res.redirect('/product');
            })
            .catch(err => {
                console.log('NO encontró el producto a eliminar ');
            }
            )

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
        return res.redirect('/product/carrodecompras')

    }
}

module.exports = productController;
