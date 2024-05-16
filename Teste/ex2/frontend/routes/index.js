var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res) {
  axios.get('http://localhost:16000/contratos')
    .then( resposta => {
      res.render('index', {title: "Índice de Contratos", contratos: resposta.data});
    }).catch( erro => {
      res.render('error', {error: erro, message: "Erro ao recuperar os contratos."})
    })
});

router.get('/:id', function(req, res) {
  axios.get(`http://localhost:16000/contratos/${req.params.id}`)
    .then( resposta => {
      res.render('contrato', {title: "Contrato", contrato: resposta.data});
    }).catch( erro => {
      res.render('error', {error: erro, message: "Erro ao recuperar o contrato."})
    })
} );


router.get('/entidades/:nipc', function(req, res) {
  axios.get(`http://localhost:16000/contratos?entidade=${req.params.nipc}`)
    .then( resposta => {
      res.render('entidade', {title: "Entidade", contratos: resposta.data, nipc: req.params.nipc});
    }).catch( erro => {
      res.render('error', {error: erro, message: "Erro ao recuperar a entidade."})
    })
});

module.exports = router;
