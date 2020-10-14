const controller = require('../controllers/controllersGames')

const express = require('express')
const router = express.Router()

router.put('/jogos/:id', controller.updateGames)

router.patch('/jogos/:id', controller.updatePatch)

module.exports = router