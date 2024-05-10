const express = require ('express')
const router = express.Router()

 const PessoasController = require('../controllers/PessoaControllers')

 const Pessoa = require('../models/Pessoa')




router.post('/pessoas', PessoasController.create)
// router.post('/pessoas', PessoasController.create) 











module.exports = router