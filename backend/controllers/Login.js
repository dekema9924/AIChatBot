
const createToken = require('./createToken');
const passport = require('passport')


const Login = (req, res, next) => {

    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({ message: info?.message || 'Login failed' });
        }

        const payload = { id: user._id };
        const token = createToken(payload.id)

        res.cookie('token', token, {
            secure: process.env.NODE_ENV === 'development' ? false : true, // true in production (HTTPS)
            maxAge: 3600000, // 1h 
            httpOnly: true,
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',

        })
        return res.status(200).json({
            message: 'Login successful',
        });

    })(req, res, next);



}

module.exports = Login