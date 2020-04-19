const {
  name,
  version,
  description
} = require('../../../package.json')

exports.pingGet = (req, res) => {
  res.json({
    name,
    description,
    version,
    uptime: process.uptime()
  })
}
