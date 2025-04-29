
const passport = require('passport')
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/usermodel')




passport.use(new LocalStrategy(
    async function (username, password, done) {
        const user = await User.findOne({ $or: [{ email: username }, { username }] })
        if (!user) return done(null, false, { message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(null, false, { message: 'Incorrect password' });

        return done(null, user);

    }
));

