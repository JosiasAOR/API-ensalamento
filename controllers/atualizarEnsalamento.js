const database = require('../model/dbase');

exports.atualizarEnsalamento = (req, res) => {
    const idEnsalamento = req.params.id;
    const novosDados = req.body;  // Novos dados de Ensalamento

    const query = `
        UPDATE Ensalamento
        SET bloco = $6, sala = $7, nomeSala = $8, capacidade = $9, descricao = $10
        WHERE id = $11;
    `;

    const values = [
        novosDados.bloco,
        novosDados.sala,
        novosDados.nomeSala,
        novosDados.capacidade,
        novosDados.descricao,
        idEnsalamento
    ];

    database.query(query, values)
        .then(() => {
            res.status(200).send({ mensagem: 'Ensalamento atualizado com sucesso.' });
        })
        .catch(erro => {
            res.status(500).send({ erro: erro });
        });
};