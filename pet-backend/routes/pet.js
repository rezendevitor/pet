// Importar o Express e criar um router
const express = require('express');
const router = express.Router();

// Importar o modelo de Pet
const Pet = require('../models/Pet');

// Rota para listar todos os Pets
router.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para obter um Pet específico por ID
router.get('/pets/:id', getPet, (req, res) => {
  res.json(res.pet);
});

// Rota para criar um novo Pet
router.post('/pets', async (req, res) => {
  const pet = new Pet({
    name: req.body.name,
    age: req.body.age,
    description: req.body.description,
    breed: req.body.breed,
    photoUrl: req.body.photoUrl
  });

  try {
    const newPet = await pet.save();
    res.status(201).json(newPet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware para buscar um Pet pelo ID
async function getPet(req, res, next) {
  let pet;
  try {
    pet = await Pet.findById(req.params.id);
    if (pet == null) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.pet = pet;
  next();
}

// Exportar o router para ser utilizado pelo Express
module.exports = router;
