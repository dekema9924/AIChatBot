

var jwt = require('jsonwebtoken');

const createToken = (user) => {

    var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token
}

module.exports = createToken


