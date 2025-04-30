
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const User = require('../models/usermodel');

const redirectUri =
    process.env.NODE_ENV === 'development'
        ? process.env.GOOGLE_REDIRECT_URI_DEV
        : process.env.GOOGLE_REDIRECT_URI_PROD;


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: redirectUri,
},
    async function (accessToken, refreshToken, profile, cb) {

        try {
            let user = await User.findOne({ googleId: profile.id });

            if (!user) {
                user = await User.create({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    profilePicture: profile.photos[0].value,
                });

            }

            cb(null, user);
        } catch (err) {
            cb(err, null);
        }

    }
));



