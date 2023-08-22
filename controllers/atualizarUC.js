const database = require('../model/dbase');

exports.atualizarUC = (req, res) => {
    const idUC = req.params.id;
    const novosDados = req.body;  // Novos dados do professor

    const query = `
        UPDATE UnidadesCurriculares
        SET nome = $1, cargahoraria = $2
        WHERE id = $3;
    `;

    const values = [
        novosDados.nome,
        novosDados.cargahoraria,
        idUC
    ];

    database.query(query, values)
        .then(() => {
            res.status(200).send({ mensagem: 'Professor atualizado com sucesso.' });
        })
        .catch(erro => {
            res.status(500).send({ erro: erro });
        });
};
