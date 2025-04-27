
const passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/usermodel');


passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_REDIRECT_URI
},
    async function (accessToken, refreshToken, profile, cb) {
        // console.log("GitHub Profile: ", profile);
        try {
            // Check if user already exists
            let user = await User.findOne({ githubId: profile.id });

            if (!user) {
                // If user does not exist, create a new one
                user = await User.create({
                    githubId: profile.id,
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