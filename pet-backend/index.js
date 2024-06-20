const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb://127.0.0.1:27017/petprofile';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Pet Schema and Model
const Schema = mongoose.Schema;
const petSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String, required: true },
  breed: { type: String, required: true },
  photoUrl: { type: String, required: true },
});

const Pet = mongoose.model('Pet', petSchema);

// Routes
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Definir rota para cadastrar pet
app.post('/petform', (req, res) => {
    const { name, age, description, breed, photoUrl } = req.body;
  
    // Aqui você deve salvar os dados recebidos no MongoDB
    // Exemplo simples sem validações:
    const pet = new Pet({ name, age, description, breed, photoUrl });
    pet.save()
      .then(savedPet => {
        res.status(201).json({ message: 'Pet cadastrado com sucesso', pet: savedPet });
      })
      .catch(err => {
        console.error('Erro ao salvar pet:', err);
        res.status(500).json({ message: 'Erro ao cadastrar pet', error: err });
      });
  });
  
// Rota para obter perfil do pet pelo ID
app.get('/petprofile/:id', (req, res) => {
    const petId = req.params.id;
  
    Pet.findById(petId)
      .then(pet => {
        if (!pet) {
          return res.status(404).json({ message: 'Pet não encontrado' });
        }
        res.status(200).json({ pet });
      })
      .catch(err => {
        console.error('Erro ao buscar perfil do pet:', err);
        res.status(500).json({ message: 'Erro ao buscar perfil do pet', error: err });
      });
  });
  
// Rota para atualizar um pet
app.put('/petprofile/:id', (req, res) => {
  const petId = req.params.id;

  Pet.findByIdAndUpdate(petId, req.body, { new: true })
    .then(pet => {
      if (!pet) {
        return res.status(404).json({ message: 'Pet não encontrado' });
      }
      res.status(200).json({ message: 'Pet atualizado com sucesso', pet });
    })
    .catch(err => res.status(500).json({ message: 'Erro ao atualizar pet', error: err }));
});


// Rota para obter todos os pets
app.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find({});
    res.json(pets);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
