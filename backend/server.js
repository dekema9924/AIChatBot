

require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const authRouter = require('./routes/auth');
const passport = require('passport');
require('./config/passport')
require('./config/db')
const cors = require('cors');
const apiRouter = require('./routes/api')
var cookieParser = require('cookie-parser')
require('./config/passportLocal')


const corsOptions = {
    origin: process.env.NODE_ENV === 'development' ? process.env.DEVELOPMENT_URL : process.env.PRODUCTION_URL,
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 200
};


// Middleware
app.use(cors(corsOptions));
app.use(cookieParser())
//initialize passport
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', authRouter)
app.use('/api', apiRouter)


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the home page');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);


})

