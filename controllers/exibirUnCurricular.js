const database = require('../model/dbase')


exports.exibirUnCurricular=(req, res) => {
database.query(`SELECT * FROM UnidadesCurriculares ;`).then(

(resultado)=>{
    res.status(200).send({UnidadesCurriculares: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}