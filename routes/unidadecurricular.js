const express = require('express')
const router = express.Router()
const controller = require('../controllers/exibirUnCurricular')
const controller2 = require('../controllers/cadastrarUnCurricular')
const controller3 = require('../controllers/deletarUC')
const controller4 = require('../controllers/atualizarUC')

router.get('/exibir', controller.exibirUnCurricular)
router.post('/cadastrar', controller2.cadastroUC)
router.delete('/deletar/:id', controller3.deletarUC)
router.put('/atualizar/:id', controller4.atualizarUC)


module.exports = router