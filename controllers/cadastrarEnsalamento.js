const database = require('../model/dbase')

exports.cadastroEnsalamento=(req, res) => {
    console.log('eu to chegando aqui')

const query =
"INSERT INTO professores (bloco,sala,nomeSala,capacidade,descricao) VALUES ($6,$7,$8,$9,$10);"
const values = [req.body.bloco, req.body.sala, req.body.nomeSala, req.body.capacidade, req.body.descricao]
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

