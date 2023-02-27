const {body} = require('express-validator');

// Definir la expresión regular para validar la contraseña
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;

console.log('FIRST NAMEEEEEE');
console.log(body('firstName'));

console.log('LAST NAMEEEEEE');
console.log(body('lastName'));

const validations = [
    body('firstName').notEmpty().withMessage('Debes completar el campo de nombre').bail().isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres.'),
    body('lastName').notEmpty().withMessage('Debes completar el campo de apellido').bail().isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres.'),
    body('email').notEmpty().withMessage('Debes ingresar un email').bail().isEmail().withMessage('Debes ingresar un email válido'),
    body('birthDate').notEmpty().withMessage('Debes ingresar una fecha'),
    body('password').notEmpty().withMessage('Ingresa la contraseña').bail().isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail().matches(passwordRegex).withMessage('La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial. Debe tener al menos 8 caracteres.')
   
]

module.exports = validations;