const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('../models/user.model');
const { generateAccessToken } = require('../helpers/token');


dotenv.config();

const userRegistration = async (req, res) => {
    try {
        const { first_name, last_name, email, password, role } = req.body;
        const userExists = await User.findOne({
            where: {email}
        });
        if (userExists) {
            return res.status(400).json({ success: false, message: "Email is already associated with an account"});
        }

        const data = await User.create({
            first_name,
            last_name,
            email,
            password: await bcrypt.hash(password, 15),
            role: role});

        const customData = {
            firstname : data.first_name,
            email: data.email,
        }
        return res.status(201).json({ success: true, message: "User registered successfully", data: customData});

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Error in registering user"});
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {email}
        });
        if (!user) {
            return res.status(404).json({ success: false, message: "No user found with this email"});
        }

        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return res.status(401).json({ success: false, message: "Incorrect email or password"});
        }

        const token = generateAccessToken(user);
        data = {name: user.name, email: user.email, accessToken: token}
        return res.status(200).json({ success: true, data: data, message: "Login successfully"});
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Error in sign in"});
    }
}



module.exports = { userRegistration, userLogin }
