
const Logout = (req, res) => {

    res.clearCookie('token', {
        secure: process.env.NODE_ENV === 'development' ? false : true, // true in production (HTTPS)
        maxAge: 3600000, // 1h 
        httpOnly: true,
        sameSite: 'lax'
    });

    res.status(200).json({ message: 'Logged out successfully' });
}

module.exports = Logout