const express = require('express');
const cors = require('cors');
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors({
  origin: 'https://frolicking-sorbet-18c3db.netlify.app',
  credentials: true
}));app.use(express.json());

app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);


module.exports = app;
