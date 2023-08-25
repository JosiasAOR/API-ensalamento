const express = require(express)
const router = express.Router()
const controller = require('../controllers/exibirEnsalamento')
const controller2 = require('../controllers/cadastrarEnsalamento')
const controller3 = require('../controllers/deletarEnsalamento')
const controller4 = require('../controllers/atualizarEnsalamento')

router.get('/exibir', controller.exibirEnsalamento)
router.post('/cadastrar', controller2.cadastroEnsalamento)
router.delete('/deletar/:id', controller3.deletarEnsalamento)
router.put('/atualizar/:id', controller4.atualizarEnsalamento)


module.exports = router