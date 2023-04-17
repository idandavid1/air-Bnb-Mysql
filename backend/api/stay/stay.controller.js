const stayService = require('./stay.service.js')

async function getStays(req, res) {
  try {
    const filterBy = req.query
    const stays = await stayService.query(filterBy)
    res.json(stays)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get stays' })
  }
}

module.exports = {
    getStays,
}
