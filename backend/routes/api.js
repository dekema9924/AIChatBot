
const express = require('express')
const googleGenAi = require('../controllers/googleGenAi')
const apiRoute = express.Router()


apiRoute.get('/', (req, res) => {
    res.send('api router')
})


apiRoute.post('/', googleGenAi)



module.exports = apiRoute