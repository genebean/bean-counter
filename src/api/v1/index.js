var router = require('express').Router()

const pwr = require('./pwr')

router.use('/pwr', pwr)

module.exports = router
