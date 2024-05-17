const mongoose = require('mongoose');

const contratosSchema = new mongoose.Schema({
    _id: Number,
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: { type: Date, default: Date.now },
    dataCelebracaoContrato: { type: Date, default: Date.now },
    precoContratual: String,
    prazoExecucao: Number,
    NIPC_entidade_comunicante: Number,
    entidade_comunicante: String,
    fundamentacao: String
});


module.exports = mongoose.model('contratos', contratosSchema, 'contratos');
