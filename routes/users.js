import express from 'express';
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// all routes in here are starting with /users as defined in our Middleware in index.js
router.get('/', getUsers); 

// same route with /users, but with POST request to add a user to the database
// creating a unique id with UUID and adding it to our user we push into the array 
router.post('/', createUser);

// Finding 1 specific user by its id
router.get('/:id', getUser);   

// Deleting 1 specific user by its id
router.delete('/:id', deleteUser);

// Updating partially 1 specific user by its id
router.patch('/:id', updateUser);   

export default router;


