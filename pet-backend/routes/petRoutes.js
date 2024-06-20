// Importar o Express e criar um router
const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// Rotas
router.get('/', petController.getAllPets);
router.get('/:id', petController.getPetById);
router.post('/', petController.createPet);
router.put('/:id', petController.updatePet);


// Exportar o router para ser utilizado pelo Express
module.exports = router;
