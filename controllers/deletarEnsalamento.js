const database = require('../model/dbase');

exports.deletarEnsalamentos= (req, res) => {
    console.log('Eu estou chegando aqui');

    const query = "DELETE FROM professores WHERE id = $11, bloco = $6, sala = $7, nomeSala = $8, capacidade = $9, descricao = $10;";
    const values = [req.params.id];
    console.log(values);

    database.query(query, values)
        .then(() => {
            res.status(200).send({ mensagem: 'Registro excluído com sucesso' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: 'Erro ao excluir: ' + erro.message });
        });
};
