const express = require('express');
const {userRegistration, userLogin} = require('../controllers/user.controller.js')
const verifyToken = require('../middleware/auth.middleware.js');
const {userRegistrationValidation, loginValidation} = require('../middleware/validator.middleware.js')
const validateError = require('../middleware/error.middleware.js')

const router = express.Router();

router.post('/sign-up', userRegistrationValidation, validateError, userRegistration);

router.post('/login', loginValidation, validateError, userLogin);



module.exports = router;
