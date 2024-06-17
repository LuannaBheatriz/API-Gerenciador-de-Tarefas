const { Tarefa } = require('../models');

// Cria uma nova tarefa
const criarTarefa = async (req, res) => {
  try {
    const { titulo, descricao, concluida } = req.body;
    const novaTarefa = await Tarefa.create({ titulo, descricao, concluida });
    res.status(201).json(novaTarefa);
  } catch (error) {
    console.error('Erro ao criar a tarefa:', error);
    res.status(500).json({ message: 'Erro ao criar a tarefa' });
  }
};

// Lista todas as tarefas
const listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.status(200).json(tarefas);
  } catch (error) {
    console.error('Erro ao listar as tarefas:', error);
    res.status(500).json({ message: 'Erro ao listar as tarefas' });
  }
};

// Obtém uma tarefa por ID
const obterTarefaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (tarefa) {
      res.status(200).json(tarefa);
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao obter a tarefa:', error);
    res.status(500).json({ message: 'Erro ao obter a tarefa' });
  }
};

// Atualiza uma tarefa por ID
const atualizarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao, concluida } = req.body;
    const [atualizado] = await Tarefa.update({ titulo, descricao, concluida }, { where: { id } });

    if (atualizado) {
      const tarefaAtualizada = await Tarefa.findByPk(id);
      res.status(200).json(tarefaAtualizada);
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao atualizar a tarefa:', error);
    res.status(500).json({ message: 'Erro ao atualizar a tarefa' });
  }
};

// Deleta uma tarefa por ID
const deletarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const deletado = await Tarefa.destroy({ where: { id } });

    if (deletado) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao deletar a tarefa:', error);
    res.status(500).json({ message: 'Erro ao deletar a tarefa' });
  }
};

module.exports = {
  criarTarefa,
  listarTarefas,
  obterTarefaPorId,
  atualizarTarefa,
  deletarTarefa,
};
