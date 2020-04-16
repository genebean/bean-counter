var router = require('express').Router()

const ping = require('./ping')
const v1 = require('./v1')

router.get('/ping', ping)
router.use('/v1', v1)

module.exports = router
