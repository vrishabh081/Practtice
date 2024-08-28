const express = require('express');
const cors = require('cors');
const { createUser, getUsers } = require('./controller/userController');
// const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/users', (req, res) => {});
app.post('/api/create-user', createUser);
app.post('/api/get-users', getUsers);

module.exports = app;
