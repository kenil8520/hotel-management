const {body} = require ('express-validator')


exports.userRegistrationValidation = [
  body('first_name').not().isEmpty().withMessage("first_name is required"),
  body('first_name').isAlpha().withMessage('first_name must be a alphabet'),
  body('first_name').isLength({max:30}).withMessage('first_name can not be more than 30 characters long'),
  body('last_name').optional().isAlpha().withMessage('last_name must be a alphabet'),
  body('last_name').isLength({max:30}).withMessage('last_name can not be more than 30 characters long'),
  body('email').not().isEmpty().withMessage("email is required"),
  body('email').isEmail().withMessage('Invalid email format'),
  body('email').isLength({max:30}).withMessage('email can not be more than 30 characters long'),
  body('password').not().isEmpty().withMessage('password is required'),
  body('password').isLength({min: 6}).withMessage('The minimum password length is 6 characters'),
  body('role').optional().isIn(['0', '1', '2']).withMessage('Role must be either 0, 1, or 2')
]

exports.loginValidation = [
  body('email').not().isEmpty().withMessage("email is required"),
  body('email').isEmail().withMessage('Invalid email format'),
  body('email').isLength({max:30}).withMessage('email can not be more than 30 characters long'),
  body('password').not().isEmpty().withMessage('password is required'),
]

exports.emailValidate = [
  body('email').not().isEmpty().withMessage("email is required"),
  body('email').isEmail().withMessage('Invalid email format'),
]

exports.passwordValidation = [
  body('password').not().isEmpty().withMessage('password is required'),
  body('password').isLength({min: 6}).withMessage('The minimum password length is 6 characters'),
]

exports.resetpasswordValidator = [
  body('newPassword').not().isEmpty().withMessage('newPassword is required'),
  body('newPassword').isLength({min: 6}).withMessage('The minimum password length is 6 characters'),
  body('confirmpassword').not().isEmpty().withMessage('confirmpassword is required'),
  body('confirmpassword').isLength({min: 6}).withMessage('The minimum password length is 6 characters'),
]

exports.changepasswordValidator = [
  body('oldPassword').not().isEmpty().withMessage('oldPassword is required'),
  body('oldPassword').isLength({min: 6}).withMessage('The minimum password length is 6 characters'),
  body('newPassword').not().isEmpty().withMessage('newPassword is required'),
  body('newPassword').isLength({min: 6}).withMessage('The minimum password length is 6 characters'),
  body('confirmPassword').not().isEmpty().withMessage('confirmPassword is required'),
  body('confirmPassword').isLength({min: 6}).withMessage('The minimum password length is 6 characters'),
]
