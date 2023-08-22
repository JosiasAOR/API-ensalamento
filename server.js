const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const exibirProfessores = require('./routes/exibirProfessores')
const unCurricular = require('./routes/unidadecurricular')

const app = express()
app.use(bodyParser.json())

// Cadastrando as rotas
app.use('/professores', exibirProfessores)
app.use('/unidadecurricular', unCurricular)

app.listen(port, () => {
    console.log(`API de cervejas: ${port}`)
})
