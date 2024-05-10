const mongoose = require('mongoose')


// Estrutura da coleção 

const schema = new mongoose.Schema({
nome: {
type: String,
required : true
}
},
    {
    timestamps: true
    }
    
)

const Pessoa = mongoose.model('pessoa', schema)
module.exports = Pessoa