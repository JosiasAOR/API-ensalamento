const database = require('../model/dbase')


exports.exibirProfessores=(req, res) => {
database.query(`SELECT * FROM professores ;`).then(

(resultado)=>{
    res.status(200).send({professores: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}