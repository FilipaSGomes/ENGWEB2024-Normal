var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* EXAMPLE LOGIN 
router.post('/login', function(req, res, next) {
  axios.post('http://localhost:3000/users/login', req.body)
    .then(resposta => {
      res.cookie('token', resposta.data.token);
      res.redirect('/');
    })
    .catch(erro => {
      res.render('error', { error: erro, message: "Credenciais inválidas" });
    });
});
*/

module.exports = router;
