const router = require('express').Router()
const validator = require('../../../util/validation')

const errorController = require('../../controllers/errorController')
const statsController = require('../controllers/pwr/statsController')
const version_controller = require('../controllers/pwr/versionController')

router.route('/stats')
  .get(validator.validate('get', '/api/v1/pwr/stats'), statsController.stats_get)
  .post(validator.validate('post', '/api/v1/pwr/stats'), statsController.stats_post)

router.route('/version')
  .get(validator.validate('get', '/api/v1/pwr/version'), version_controller.version_get)

router.use(errorController.error_use)

module.exports = router
