const express = require('express')
const router = express.Router()
const controller = require('../controllers/exibirProfessores')
const controller2 = require('../controllers/cadastrarProfessor')
const controller3 = require('../controllers/deletarProfessor')

router.get('/exibir', controller.exibirProfessores)
router.post('/cadastrar', controller2.cadastroProfessores)
router.delete('/deletar/:id', controller3.deletarProfessor)


module.exports = router