const express = require('express')
const router = express.Router()
const controller = require('../controllers/exibirProfessores')
const controller2 = require('../controllers/cadastrarProfessor')

router.get('/exibir', controller.exibirProfessores)
router.post('/cadastrar', controller2.cadastroProfessores)


module.exports = router