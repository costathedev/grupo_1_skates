const e = require('express');
const db = require('../database/models');
const { Association } = require('sequelize');
const Op = db.Sequelize.Op;

const userAPIController = {

    list: (req, res) => {
        db.User.findAll(
            {
                // include: [{ association: 'roles' }],
                where:{
                    deleted_at: null,
                }         
            }
        ).then(users => {
            return res.status(200).json({
                total: users.length,
                data: users,
                status: 200,
            });
        })
        .catch(err => { console.log('Errores al buscar usuarios: ' + err)})
    },

    show: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            return res.status(200).json({
                data: user,
                status: 200,
            });
        })
        .catch(err => { console.log('Errores al buscar el usuario: ' + err)})
    }



}

module.exports = userAPIController;