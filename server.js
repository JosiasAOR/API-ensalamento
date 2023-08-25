const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const exibirProfessores = require('./routes/exibirProfessores')
const unCurricular = require('./routes/unidadecurricular')
const ensalamento = require('./routes/Ensalamento')

const app = express()
app.use(bodyParser.json())

// Cadastrando as rotas
app.use('/professores', exibirProfessores)
app.use('/unidadecurricular', unCurricular)
app.use('/Ensalamento', ensalamento)

app.listen(port, () => {
    console.log(`API do server: ${port}`)
})
