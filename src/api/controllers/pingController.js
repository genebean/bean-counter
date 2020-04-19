const {
  name,
  version,
  description
} = require('../../../package.json')

exports.ping_get = function(req, res) {
  res.json({
    name,
    description,
    version,
    uptime: process.uptime()
  })
}
