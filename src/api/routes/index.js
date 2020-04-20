const router = require('express').Router()
const validator = require('../../util/validation')

const errorController = require('../controllers/errorController')
const pingController = require('../controllers/pingController')

const v1PwrRouter = require('../v1/routes/pwr')

router.get('/ping', validator.validate('get', '/api/ping'), pingController.pingGet)

router.use('/v1/pwr', v1PwrRouter)

router.use(errorController.errorUse)

module.exports = router
