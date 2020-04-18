var express = require('express')
var router = express.Router()

const pwr = require('./pwr')

router.use('/pwr', pwr)

module.exports = router
