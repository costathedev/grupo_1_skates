const {body, check} = require('express-validator');

//validaciones
const validations = [
    body('name').notEmpty().withMessage('Debes completar el campo de nombre').bail().isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),
    body('description').notEmpty().withMessage('Debes completar el campo de descripción').bail().isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
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