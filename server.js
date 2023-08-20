const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const exibirProfessores = require('./routes/exibirProfessores')

const app = express()
app.use(bodyParser.json())

// Cadastrando as rotas
app.use('/professores', exibirProfessores)

app.listen(port, () => {
    console.log(`API de cervejas: ${port}`)
})
