const e = require('express');
const db = require('../../database/models');
const { Association } = require('sequelize');
const Op = db.Sequelize.Op;

const productAPIController = {

    list: (req, res) => {
        db.Product.findAll(
            {
                // include: [{ association: 'roles' }],
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
    }



}

module.exports = productAPIController;