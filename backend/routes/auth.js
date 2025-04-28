
const express = require('express');
const authrouter = express.Router();
const passport = require('passport');
const getUserProfile = require('../controllers/getUserProfile');
const Logout = require('../controllers/logout');
const isAuth = require('../middleware/isAuth');
const createToken = require('../controllers/createToken');

authrouter.get('/login', (req, res) => {
    res.send('Login page');
});


// Route for handling user registration google
authrouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

authrouter.get('/auth/google/callback',
    passport.authenticate('google', { session: false, failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        // console.log('req.user:', req.user); // has _id, not id

        const user = {
            _id: req.user._id
        }
        let token = createToken(user)
        res.cookie('token', token, {
            secure: process.env.NODE_ENV === 'development' ? false : true, // true in production (HTTPS)
            maxAge: 3600000, // 1h 
            httpOnly: true,
            sameSite: 'lax'
        })
        res.redirect('http://localhost:5173');
    });





// Route for handling user registration github
authrouter.get('/auth/github',
    passport.authenticate('github', { scope: ['profile'] }));


authrouter.get('/auth/github/callback',
    passport.authenticate('github', { session: false, failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        const user = {
            _id: req.user._id
        }
        let token = createToken(user)
        res.cookie('token', token, {
            secure: process.env.NODE_ENV === 'development' ? false : true, // true in production (HTTPS)
            maxAge: 3600000, // 1h 
            httpOnly: true,
            sameSite: 'lax'
        })
        res.redirect('http://localhost:5173');
    });

//get user profile
authrouter.get('/auth/profile', isAuth, getUserProfile)

authrouter.get('/auth/logout', isAuth, Logout)


module.exports = authrouter;