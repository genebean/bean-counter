var router = require('express').Router()
const validator = require('../../../util/validation')

const stats = require('./stats')
const version = require('./version')

router.route('/stats')
  .get(validator.validate("get", "/api/v1/pwr/stats"), stats.statsGet)
  .post(validator.validate("post", "/api/v1/pwr/stats"), stats.statsPost)

router.route('/version')
  .get(validator.validate("get", "/api/v1/pwr/version"), version.versionGet)

router.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: {
      name: err.name,
      message: err.message,
      data: err.data,
    },
  })
})

module.exports = router
