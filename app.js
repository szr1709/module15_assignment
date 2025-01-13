const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Import routes
const exampleRoutes = require('./routes/exampleRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/api/example', exampleRoutes);
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
