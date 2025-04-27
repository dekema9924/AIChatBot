

require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const authRouter = require('./routes/auth');
const passport = require('passport');
require('./config/passport')
const session = require('express-session');
require('./config/db')
const cors = require('cors');

const corsOptions = {
    origin: process.env.NODE_ENV === 'development' ? 'http://localhost:5173' : 'https://your-production-url.com', // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));


//initialize passport
app.use(session({
    secret: process.env.SESSION_SECRET,
    name: 'sessionId',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV === 'development' ? false : true, // true in production (HTTPS)
        maxAge: 1000 * 60 * 60 * 24, // 24 hours 
        httpOnly: true,
        sameSite: 'lax'
    }
}));
app.use(passport.initialize());
app.use(passport.session());


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', authRouter)


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the home page');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);


})

