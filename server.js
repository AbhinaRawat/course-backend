const path = require('path');
const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

// Serve API routes
app.use('/api/users', userRoutes);

// Serve Angular frontend static files
const frontendPath = path.join(__dirname, 'public'); // Make sure Angular files copied here
app.use(express.static(frontendPath));

// For all other routes, serve Angular index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
