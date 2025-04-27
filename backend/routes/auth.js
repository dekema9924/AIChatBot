
const express = require('express');
const authrouter = express.Router();
const passport = require('passport');
const getUserProfile = require('../controllers/getUserProfile');

authrouter.get('/login', (req, res) => {
    res.send('Login page');
});


// Route for handling user registration google
authrouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

authrouter.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:5173');
    });





// Route for handling user registration github
authrouter.get('/auth/github',
    passport.authenticate('github', { scope: ['profile'] }));


authrouter.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:5173');
    });

//get user profile
authrouter.get('/auth/profile', getUserProfile)


module.exports = authrouter;