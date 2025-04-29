const User = require('../models/usermodel')
const bcrypt = require('bcryptjs');


const Register = async (req, res) => {

    const { email, username, password } = req.body

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) return res.status(400).json({ message: 'Email or username already in use' });
    bcrypt.hash(password, 10, async function (err, hash) {
        await User.create({
            email, username, password: hash
        })
        res.status(201).json({ message: 'account Created' })
    })





};

module.exports = Register