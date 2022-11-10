import { v4 as uuidv4 } from "uuid";
let users = [];
export const getUsers = (req, res) => {
  res.send(users);
};

export const addUser = (req, res) => {
  const newUser = req.body;
  users.push({ ...newUser, id: uuidv4() });
  res.send(`User with name ${newUser.firstname} got added`).status(200);
};
export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  let userToBeUpdated = users.find((user) => user.id === id);
  if (firstname) {
    userToBeUpdated.firstname = firstname;
  }
  if (lastname) {
    userToBeUpdated.lastname = lastname;
  }
  if (age) {
    userToBeUpdated.age = age;
  }
  res.send(users);
};
