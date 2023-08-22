const database = require('../model/dbase')

exports.cadastroUC=(req, res) => {
    console.log('eu to chegando aqui')

const query =
"INSERT INTO UnidadesCurriculares (nome,cargahoraria) VALUES ($1,$2);"
const values = [req.body.nome, req.body.cargahoraria]
console.log(values)
database.query(query, values).then(
    ()=>{
        res.status(200).send({mensagem: 'gravou com sucesso'});
    },
    (erro)=>{
        res.status(erro).send({erro: "erro"});
    }
)

}
/////////////////////////////

