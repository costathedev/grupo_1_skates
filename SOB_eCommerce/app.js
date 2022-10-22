// Reuire de Modulos externos 
const express = require('express');
const path = require('path');

// Constantes y Variables
const app = express(); // Para administrar el servidor web
const puerto = 3000; // Puerto a utilizar para el servidor web
const url = 'http://localhost'; // Url a utilizar para el servidor web

// Definir como públicos los recursos
app.use( express.static(path.resolve(__dirname, './public')));

// Levantar servidor web con Express
app.listen(puerto, () => console.log('Servidor corriendo en ' + url + ':' + puerto + '/'))

// GETs
app.get('/', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'views/index.html'))
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