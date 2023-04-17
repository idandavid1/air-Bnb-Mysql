const express = require('express')
const { getStays } = require('./stay.controller.js')
const router = express.Router()

router.get('/', getStays)

module.exports = router