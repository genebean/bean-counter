const express = require('express')

const router = express.Router()

const pwr = require('./pwr')

router.use('/pwr', pwr)

module.exports = router
