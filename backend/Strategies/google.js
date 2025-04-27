
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const User = require('../models/usermodel');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_REDIRECT_URI,
},
    async function (accessToken, refreshToken, profile, cb) {
        console.log("Google Profile: ", profile);

        try {
            // Check if user already exists
            let user = await User.findOne({ googleId: profile.id });

            if (!user) {
                // If user does not exist, create a new one
                user = await User.create({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    profilePicture: profile.photos[0].value,
                });
            }

            // Pass the user to the session
            cb(null, user);
        } catch (err) {
            cb(err, null);  // Handle any error during the process
        }

    }
));



