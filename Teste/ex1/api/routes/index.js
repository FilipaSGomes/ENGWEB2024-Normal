var express = require('express');
var router = express.Router();
var Contrato = require('../controller/contrato');

// Get all entidade_comunicante without repetition in alphabetical order
router.get('/contratos/entidades', async (req, res) => {
  try {
    const entidades = await Contrato.getAllEntidades();
    res.json(entidades);
  } catch (error) {
    console.error('Error obtaining list of entidades:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Get all tipoprocedimento without repetition in alphabetical order
router.get('/contratos/tipos', async (req, res) => {
  try {
    const tipos = await Contrato.getAllTipos();
    res.json(tipos);
  } catch (error) {
    console.error('Error obtaining list of tipos:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all Contratos without repetition
router.get('/contratos', async (req, res) => {
  try {
    const contratos = await Contrato.getAllContratos();
    res.json(contratos);
  } catch (error) {
    console.error('Error obtaining list of contratos:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get Contratos by id
router.get('/contratos/:id', async (req, res) => {
  try {
    const contrato = await Contrato.getContratosById(req.params.id);
    if (!contrato) {
      return res.status(404).json({ error: 'Contrato not found' });
    }
    res.json(contrato);
  } catch (error) {
    console.error('Error obtaining contrato:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Get Contratos by entidade_comunicante
router.get(/\/contratos\?entidade=(.*)/, async (req, res) => {
  try {
    var match = text.match(pattern);
    const contrato = await Contrato.getContratosByEntidade(match[1]);
    if (!contrato) {
      return res.status(404).json({ error: 'Contrato not found' });
    }
    res.json(contrato);
  } catch (error) {
    console.error('Error obtaining contrato:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} );

// Get Contratos by tipoprocedimento
router.get(/\/contratos\?tipoprocedimento=(.*)/, async (req, res) => {
  try {
    var match = text.match(pattern);
    const contrato = await Contrato.getContratosByTipoProcedimento(match[1]);
    if (!contrato) {
      return res.status(404).json({ error: 'Contrato not found' });
    }
    res.json(contrato);
  } catch (error) {
    console.error('Error obtaining contrato:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




// Post Contrato
router.post('/contratos', async (req, res) => {
  try {
    const contrato = await Contrato.createContrato(req.body);
    res.status(201).json(contrato);
  } catch (error) {
    console.error('Error creating contrato:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Put Contrato
router.put('/contratos/:id', async (req, res) => {
  try {
    const contrato = await Contrato.updateContrato(req.params.id, req.body);
    if (!contrato) {
      return res.status(404).json({ error: 'Contrato not found' });
    }
    res.json(contrato);
  } catch (error) {
    console.error('Error updating contrato:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Delete Contrato
router.delete('/contratos/:id', async (req, res) => {
  try {
    const contrato = await Contrato.deleteContrato(req.params.id);
    if (!contrato) {
      return res.status(404).json({ error: 'Contrato not found' });
    }
    res.json(contrato);
  } catch (error) {
    console.error('Error deleting contrato:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
