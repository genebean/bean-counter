const router = require('express').Router()
const validator = require('../../util/validation')

const error_controller = require('../controllers/errorController')
const ping_controller = require('../controllers/pingController')

const v1PwrRouter = require('../v1/routes/pwr')

router.get('/ping', validator.validate("get", "/api/ping"), ping_controller.ping_get)

router.use('/v1/pwr', v1PwrRouter)

router.use(error_controller.error_use)

module.exports = router
