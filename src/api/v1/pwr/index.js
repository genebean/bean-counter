var express = require('express')
var router = express.Router()

const stats = require('./stats')

router.get('/stats', stats)

module.exports = router
