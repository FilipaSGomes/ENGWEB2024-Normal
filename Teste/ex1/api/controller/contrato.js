const Contrato = require('../model/contrato');

// Get all Contratos without repetition
module.exports.getAllContratos = async () => {
    return await Contrato.find();
}

// Get Contratos by id
module.exports.getContratosById = async (id) => {
    return await Contrato.find  ({ _id: id });
}

// Get Contratos by entidade_comunicante
module.exports.getContratosByEntidade = async (entidade_comunicante) => {
    return await Contrato.find({ entidade_comunicante: entidade_comunicante });
}

// Get Contratos by tipoprocedimento
module.exports.getContratosByTipoProcedimento = async (tipoprocedimento) => {
    return await Contrato.find({ tipoprocedimento: tipoprocedimento });
}

// Get all entidade_comunicante without repetition in alphabetical order
module.exports.getAllEntidades = async () => {
    return await Contrato.find().distinct('entidade_comunicante').sort();
}

// Get all tipoprocedimento without repetition in alphabetical order
module.exports.getAllTipos = async () => {
    return await Contrato.find().distinct('tipoprocedimento').sort();
}

// Post Contrato
module.exports.createContrato = async (contrato) => {
    return await Contrato.create(contrato);
}

// Put Contrato
module.exports.updateContrato = async (id, contrato) => {
    return await Contrato.findByIdAndUpdate(id, contrato);
}

// Delete Contrato
module.exports.deleteContrato = async (id) => {
    return await Contrato.findByIdAndDelete(id);
}



