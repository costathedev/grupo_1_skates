const {body, check} = require('express-validator');

//validaciones
const validations = [
    body('name').notEmpty().isLength({ min: 5 }).withMessage('Debes completar el campo de nombre'),
    body('description').notEmpty().isLength({ min: 20 }).withMessage('Debes completar el campo de descripción'),
    body('price').notEmpty().withMessage('Debes completar el campo de precio'),
    check('image')
      .custom((value, { req }) => {
        if (!req.file || !['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(req.file.mimetype)) {
          throw new Error('El archivo debe ser un JPEG, JPG, PNG o GIF');
        }
        return true;
      })
  ];

module.exports = validations;