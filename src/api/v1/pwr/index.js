var router = require('express').Router()
const validator = require('../../../util/validation')

const stats = require('./stats')

router.route('/stats')
  .get(stats.statsGet)
  .post(validator.validate("post", "/api/v1/pwr/stats"), stats.statsPost)

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
