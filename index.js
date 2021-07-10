import express from 'express'; // ES6 module syntax
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';  //ES6 module syntax

const app = express();
const PORT = 5000;

// Middleware: bodyParser
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware : all routes in users.js are gonna start with /users:
app.use('/users', usersRoutes);

// Homepage when people reach the root http://localhost:5000 
app.get('/', (req, res) => res.send('Hello from Homepage.'));









app.listen (PORT, () => console.log(`Server running on port http://localhost:${PORT}`));










