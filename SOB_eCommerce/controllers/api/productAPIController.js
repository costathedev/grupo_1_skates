const e = require('express');
const db = require('../../database/models');
const { Association } = require('sequelize');
const Op = db.Sequelize.Op;

const productAPIController = {

    list: (req, res) => {
        db.Product.findAll(
            {
                include: [{ association: 'Category' }],
                where:{
                    deleted_at: null,
                }         
            }
        ).then(products => {
            return res.status(200).json({
                total: products.length,
                data: products,
                status: 200,
            });
        })
        .catch(err => { console.log('Errores al buscar productos: ' + err)})
    },

    show: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200,
            });
        })
        .catch(err => { console.log('Errores al buscar el producto: ' + err)})
    },

    last: (req, res) => {

        db.Product.findOne({
            order: [['id', 'DESC']],
        } ).then(product => {
            return res.status(200).json({
                total: 1,
                data: product,
                status: 200,
            });
        })
        .catch(err => { console.log('Errores al buscar productos: ' + err)})
    },

    image: (req, res) => {
        const imagePath =  __dirname + '../../../public/img/products/' + req.params.img;
        const fs = require('fs');
    
        
        fs.stat(imagePath, (error, stats) => {
            if (error) {
              console.error('Error al obtener el tamaño de la imagen:', error);
              return res.status(500).end();
            }

            // Configurar la respuesta HTTP
            res.writeHead(200, {
                'Content-Type': 'image/jpeg',
                'Content-Length': stats.size
            });

            // Leer y devolver la imagen
            const readStream = fs.createReadStream(imagePath);
            readStream.pipe(res);

        });
    }



}

module.exports = productAPIController;