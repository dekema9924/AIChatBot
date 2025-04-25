
const passport = require('passport');
const GoogleStrategy = require('../Strategies/google');
const User = require('../models/usermodel');



// Serialize user instance to the session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            return done(new Error('User not found'), null);
        }
        done(null, user);
    }
    catch (err) {
        done(err, null);
    }
});

module.exports = passport;
