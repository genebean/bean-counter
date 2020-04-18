const express = require('express')

const router = express.Router()

const stats = require('./stats')

router.get('/stats', stats)

module.exports = router
