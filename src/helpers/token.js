const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return jwt.sign(
        {
            user: {
                name: user.name,
                email: user.email,
                id: user.id,
            },
        },
        process.env.JWT_SECRET,
        { expiresIn: "15h" }
    );
};

module.exports = {
    generateAccessToken
};
