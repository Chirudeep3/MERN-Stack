// server/app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('/Project/server/config/db');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/employees', require('./routes/employees'));

module.exports = app;
