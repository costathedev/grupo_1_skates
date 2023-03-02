// Require de Modulos externos 
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser'); //cookies: todo aquello que se guarda del lado del navegador

// RUTEO
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const mainRoutes = require('./routes/main')
//Rutas de APIs
const apiUserRoutes = require('./routes/api/userAPIRoutes');
const apiProductRoutes = require('./routes/api/productAPIRoutes');
const apiCategoryRoutes = require('./routes/api/categoryAPIRoutes');


// Required nuestros
// const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const userIsLoggedMiddleware = require('./middlewares/userIsLoggedMiddleware');
const categoriesListMiddleware = require('./middlewares/categoriesListMiddleware');

// Constantes y Variables
const app = express(); // Para administrar el servidor web.
const puerto = 3050; // Puerto a utilizar para el servidor web.
const url = 'http://localhost'; // Url a utilizar para el servidor web.


// Aclaramos a Express cual es el motor de plantillas que vamos a usar, 
app.set('view engine', 'ejs');

// Definir como públicos los recursos.
app.use(express.static(path.resolve('./public')));

// Para permitir PUT y PATCH en los formularios
app.use(methodOverride('_method'));

// Para permitir el paso de información en el body, con json
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Para mantener las sesiones de usuarios:
app.use(session({
    secret: 'Its a secret',
    resave: false,
    saveUninitialized: false,
}))

// Para utilizar cookies
app.use(cookies());

// app.use(userLoggedMiddleware);
app.use(userIsLoggedMiddleware);
app.use(categoriesListMiddleware);

// RUTAS
app.use('/', mainRoutes)
app.use('/user', userRoutes);
app.use('/product', productRoutes);
// Rutas de APIs
app.use('/api/user', apiUserRoutes);
app.use('/api/product', apiProductRoutes);
app.use('/api/category', apiCategoryRoutes);


// ERROR 404 al no ingresar a una url existente
// Se define luego de todas las demás rutas
app.use((req, res, next) => {
    res.status(404).render("main/not-found", { userLogged: req.session.userLogged});
});

// Levantar servidor web con Express
app.listen(puerto, () => console.log('Servidor corriendo en ' + url + ':' + puerto + '/'))



