import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req,res) => {
    const user = req.body;
    users.push({...user, id: uuidv4() }); 
    res.send(`User with the name ${user.firstName} has been added to the database!`);
}

export const getUser = (req, res) => {
    const { id } = req.params; //fetch the :id from the request in the URL
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params; //fetch the :id from the request in the URL
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} has been deleted from the database!`);
}

export const updateUser = (req, res) => {
    const { id } = req.params; //fetch the :id from the request in the URL
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`User with the id ${id} has been updated`);
}