const router = require('express').Router()
const validator = require('../../../util/validation')

const error_controller = require('../../controllers/errorController')
const stats_controller = require('../controllers/pwr/statsController')
const version_controller = require('../controllers/pwr/versionController')

router.route('/stats')
  .get(validator.validate("get", "/api/v1/pwr/stats"), stats_controller.stats_get)
  .post(validator.validate("post", "/api/v1/pwr/stats"), stats_controller.stats_post)

router.route('/version')
  .get(validator.validate("get", "/api/v1/pwr/version"), version_controller.version_get)

router.use(error_controller.error_use)

module.exports = router
