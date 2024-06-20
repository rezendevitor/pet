const Pet = require('../models/Pet'); // Importa o modelo Pet

class PetController {
  // Criação de um novo pet
  async createPet(req, res) {
    const { name, age, description, breed, gender, type, photoUrl } = req.body;
    const pet = new Pet({ name, age, description, breed, gender, type, photoUrl });

    try {
      const savedPet = await pet.save();
      res.status(201).json({ message: 'Pet cadastrado com sucesso', pet: savedPet });
    } catch (err) {
      res.status(500).json({ message: 'Erro ao cadastrar pet', error: err });
    }
  }

  // Obter pet por ID
  async getPetById(req, res) {
    const petId = req.params.id;

    try {
      const pet = await Pet.findById(petId);
      if (!pet) {
        return res.status(404).json({ message: 'Pet não encontrado' });
      }
      res.status(200).json({ pet });
    } catch (err) {
      console.error('Erro ao buscar perfil do pet:', err);
      res.status(500).json({ message: 'Erro ao buscar perfil do pet', error: err });
    }
  }

  // Obter todos os pets
  async getAllPets(req, res) {
    try {
      const pets = await Pet.find({});
      res.json(pets);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  // Atualizar um pet
  async updatePet(req, res) {
    const petId = req.params.id;

    try {
      const pet = await Pet.findByIdAndUpdate(petId, req.body, { new: true });
      if (!pet) {
        return res.status(404).json({ message: 'Pet não encontrado' });
      }
      res.status(200).json({ message: 'Pet atualizado com sucesso', pet });
    } catch (err) {
      res.status(500).json({ message: 'Erro ao atualizar pet', error: err });
    }
  }
}

module.exports = new PetController();