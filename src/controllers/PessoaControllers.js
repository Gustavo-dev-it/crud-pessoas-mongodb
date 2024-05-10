const Pessoa = require('../models/Pessoa')

//metodos 


async function create(req, res) {

    try {
        const pessoa = new Pessoa(req.body)
        const pessoaCriada = await pessoa.save()
        res.status(201).json(pessoaCriada)
    } catch (error) {

        console.log(error)
        res.status(400).json(

            {
                mensagem: "Ocorreu um erro ao cadastrar a pessoa",
                erro: error

            }
        )
    }

}

module.exports = {
    create
}