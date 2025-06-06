const model = require('../models/professoresModel-public'); 

// Lista todos os professores com suas matérias
async function listarProfessores(req, res) {
  try {
    const professores = await model.listarProfessoresComMaterias();
    res.json(professores);
  } catch (error) {
    console.error('Erro ao listar professores:', error);
    res.status(500).json({ erro: 'Erro interno ao listar professores' });
  }
}

// Busca um professor por ID, com suas matérias
const buscarProfessorPorId = async (req, res) => {
  const id = req.params.id;
  try{
    const resultado = await model.buscarProfessorPorId(id);
    if(resultado){
      res.json(resultado);
    } else {
      res.status(404).json({erro: 'Professor não encontrado.'});
    }
  } catch (error){
    console.error('Erro ao buscar professor por ID:', error);
    res.status(505).json({erro: 'Erro interno ao buscar professor'});
  }
};

module.exports = {
  listarProfessores,
  buscarProfessorPorId,
};
