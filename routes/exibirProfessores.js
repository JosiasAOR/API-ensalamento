const express = require('express')
const router = express.Router()
const controller = require('../controllers/exibirProfessores')

router.get('/', controller.exibirProfessores)


module.exports = router