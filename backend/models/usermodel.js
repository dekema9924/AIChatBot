
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        unique: true,
        sparse: true, // allows multiple nulls
    },
    githubId: {
        type: String,
        unique: true,
        sparse: true,
    },
    displayName: {
        type: String,
        trim: true,
    },
    profilePicture: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email'],
        unique: true,
        sparse: true,
    },
    username: {
        type: String,
        unique: true,
        sparse: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
    },
    password: {
        type: String,
        minlength: 6,
    },
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);
