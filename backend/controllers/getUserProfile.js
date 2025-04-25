const User = require('../models/usermodel');

const getUserProfile = async (req, res) => {
    // Check if user is authenticated
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Fetch user data from the database
        const user = await User.findById(req.user._id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send user data as response
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

}

module.exports = getUserProfile;