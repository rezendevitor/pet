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

// Importar rotas
const petRoutes = require('./routes/petRoutes');

// Usar rotas
app.use('/pets', petRoutes);
app.use('/petprofile', petRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});


// Start Server
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
