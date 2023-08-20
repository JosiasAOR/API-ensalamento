const database = require('../model/dbase')

exports.cadastroProfessores=(req, res) => {
    console.log('eu to chegando aqui')

const query =
"INSERT INTO professores (nome,disciplina,email,telefone) VALUES ($1,$2,$3,$4);"
const values = [req.body.nome, req.body.diciplina, req.body.email, req.body.telefone]
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

