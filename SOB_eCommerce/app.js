// Reuire de Modulos externos 
const express = require('express');
const path = require('path');
// RUTEO
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')

// Constantes y Variables
const app = express(); // Para administrar el servidor web
const puerto = 3050; // Puerto a utilizar para el servidor web
const url = 'http://localhost'; // Url a utilizar para el servidor web

// Aclaramos a Express cual es el motor de plantillas que vamos a usar, 
app.set('view engine', 'ejs');


// Definir como públicos los recursos
app.use( express.static(path.resolve(__dirname, './public')));

// RUTEO
// Rutas
app.use('/user', userRoutes);
app.use('/product', productRoutes);


// Levantar servidor web con Express
app.listen(puerto, () => console.log('Servidor corriendo en ' + url + ':' + puerto + '/'))

// GETs
app.get('/', (req, res) => 
    // res.sendFile(path.resolve(__dirname, 'views/main/index.ejs'))
    res.render('main/index')
)


app.get('/refund-policy', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'views/refund-policy.html'))
)

app.get('/faq', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'views/faq.html'))
)

app.get('/contact', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'views/contact.html'))
)

app.get('/about-us', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'views/about-us.html'))
)

app.get('/shopping-cart', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'views/carrodecompras.html'))
)

app.get('/basic', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'views/basic.html'))
)



// RUTEO - Esto ya no va

// app.get('/user/login', (req, res) => 
//     res.sendFile(path.resolve(__dirname, 'views/users/login.html'))
//     // res.sendFile(path.resolve(__dirname, 'views/products/productDetail.html'))
// )

// app.get('/register', (req, res) => 
//     res.sendFile(path.resolve(__dirname, 'views/register.html'))
// )

// app.get('/producto', (req, res) => 
// res.sendFile(path.resolve(__dirname, 'views/products/productDetail.html'))
// )

// RUTEO - Esto ya no va HASTA ACÁ