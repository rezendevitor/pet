// Importar o Mongoose para definir o modelo
const mongoose = require('mongoose');

// Definir o esquema do Pet
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
    required: true
  }
});

// Criar o modelo a partir do esquema e exportar
module.exports = mongoose.model('Pet', petSchema);
