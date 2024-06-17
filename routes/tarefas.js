const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');

router.post('/tarefas', TarefaController.criarTarefa);
router.get('/tarefas', TarefaController.listarTarefas);
router.get('/tarefas/:id', TarefaController.obterTarefaPorId);
router.put('/tarefas/:id', TarefaController.atualizarTarefa);
router.delete('/tarefas/:id', TarefaController.deletarTarefa);

module.exports = router;
