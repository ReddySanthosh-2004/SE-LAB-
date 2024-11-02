const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userRoutes = require('./routes/user');
const petRoutes = require('./routes/pet');
const feedbackRoutes = require('./routes/feedback'); // <-- Add this

app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/feedback', feedbackRoutes); // <-- Add this

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
