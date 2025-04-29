
const express = require('express');
const authrouter = express.Router();
const passport = require('passport');
const getUserProfile = require('../controllers/getUserProfile');
const Logout = require('../controllers/logout');
const isAuth = require('../middleware/isAuth');
const createToken = require('../controllers/createToken');
const Register = require('../controllers/Register');
const Login = require('../controllers/Login');

authrouter.get('/login', (req, res) => {
    res.send('Login page');
});


// Route for handling user registration google
authrouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

authrouter.get('/auth/google/callback',
    passport.authenticate('google', { session: false, failureRedirect: '/login' }),
    function (req, res) {

        const user = {
            id: req.user._id
        }

        let token = createToken(user.id)
        res.cookie('token', token, {
            secure: process.env.NODE_ENV === 'development' ? false : true, // true in production (HTTPS)
            maxAge: 3600000, // 1h 
            httpOnly: true,
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',

        })
        console.log(process.env.NODE_ENV)
        console.log(process.env.PRODUCTION_URL)

        res.redirect(
            process.env.NODE_ENV === 'development' ?
                process.env.DEVELOPMENT_URL :
                process.env.PRODUCTION_URL
        );


    });





// Route for handling user registration github
authrouter.get('/auth/github',
    passport.authenticate('github', { scope: ['profile'] }));


authrouter.get('/auth/github/callback',
    passport.authenticate('github', { session: false, failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        const user = {
            id: req.user._id
        }
        let token = createToken(user.id)
        res.cookie('token', token, {
            secure: process.env.NODE_ENV === 'development' ? false : true, // true in production (HTTPS)
            maxAge: 3600000, // 1h 
            httpOnly: true,
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',

        })
        res.redirect(
            process.env.NODE_ENV === 'development' ?
                process.env.DEVELOPMENT_URL :
                process.env.PRODUCTION_URL
        );



    });

//get user profile
authrouter.get('/auth/profile', isAuth, getUserProfile)

authrouter.get('/auth/logout', isAuth, Logout)



//passport local auth

//register 
authrouter.post('/auth/register', Register)

//Login
authrouter.post('/auth/login', Login)



module.exports = authrouter;