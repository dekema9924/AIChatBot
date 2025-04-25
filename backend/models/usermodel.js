
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    googleId: { type: String },
    githubId: { type: String },
    displayName: String,
    profilePicture: String,
})

module.exports = mongoose.model('User', userSchema);
