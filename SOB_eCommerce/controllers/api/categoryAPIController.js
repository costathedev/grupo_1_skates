const e = require('express');
const db = require('../../database/models');
const { Association } = require('sequelize');
const Op = db.Sequelize.Op;

const categoryAPIController = {

    list: (req, res) => {
        db.Category.findAll(
            {
                // include: [{ association: 'roles' }],
                where:{
                    deleted_at: null,
                }         
            }
        ).then(categories => {
            return res.status(200).json({
                total: categories.length,
                data: categories,
                status: 200,
            });
        })
        .catch(err => { console.log('Errores al buscar categorías: ' + err)})
    },

    show: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200,
            });
        })
        .catch(err => { console.log('Errores al buscar la categoría: ' + err)})
    }



}

module.exports = categoryAPIController;