const database = require('../model/dbase');

exports.atualizarProfessores = (req, res) => {
    const idProfessor = req.params.id;
    const novosDados = req.body;  // Novos dados do professor

    const query = `
        UPDATE professores
        SET nome = $1, disciplina = $2, email = $3, telefone = $4
        WHERE id = $5;
    `;

    const values = [
        novosDados.nome,
        novosDados.disciplina,
        novosDados.email,
        novosDados.telefone,
        idProfessor
    ];

    database.query(query, values)
        .then(() => {
            res.status(200).send({ mensagem: 'Professor atualizado com sucesso.' });
        })
        .catch(erro => {
            res.status(500).send({ erro: erro });
        });
};
