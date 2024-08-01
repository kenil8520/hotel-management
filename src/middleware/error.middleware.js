const { validationResult } = require('express-validator');

const validateError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.errors.map(error => error.msg);
        return res.status(400).json({ success: false, message: errorMessages[0] });
    }
    next();
};

module.exports = validateError;
