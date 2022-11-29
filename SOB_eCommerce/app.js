// Reuire de Modulos externos 
const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

// RUTEO
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const mainRoutes = require('./routes/main')


// Constantes y Variables
const app = express(); // Para administrar el servidor web.
const puerto = 3050; // Puerto a utilizar para el servidor web.
const url = 'http://localhost'; // Url a utilizar para el servidor web.


// Aclaramos a Express cual es el motor de plantillas que vamos a usar, 
app.set('view engine', 'ejs');

// Caro: Esto estaba antes de definir la constante "app" y daba error, lo pongo abajo:
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Definir como públicos los recursos.
app.use(express.static(path.resolve('./public')));

app.use(methodOverride('_method'));


// RUTEO
// Rutas
app.use('/', mainRoutes)
app.use('/user', userRoutes);
app.use('/product', productRoutes);


// Levantar servidor web con Express
app.listen(puerto, () => console.log('Servidor corriendo en ' + url + ':' + puerto + '/'))



