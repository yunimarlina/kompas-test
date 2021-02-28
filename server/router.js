
const express = require('express')
const Controller = require('./Controller.js')
const router = express.Router()


router.post('/login', Controller.login)
router.post('/berita', Controller.addBerita)
router.delete('/berita/:id', Controller.deleteBerita)


module.exports = router