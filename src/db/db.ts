import { v4 as uuidv4 } from "uuid";
import { User, UserData, UserId } from "./types";

export let users: User[] = [];

export const getAllUsers = () => users;

export const getUserById = (userId: UserId) =>
  users.find(({ id }) => id === userId);

export const addUser = (userData: UserData) => {
  const newUser: User = {
    id: uuidv4(),
    ...userData,
  };

  users.push(newUser);

  return newUser;
};

export const updateUser = (preparedUser: User) => {
  users = users.map((user) =>
    user.id === preparedUser.id ? preparedUser : user
  );

  return preparedUser;
};

export const deleteUser = (userId: UserId) => {
  users = users.filter((user) => user.id !== userId);

  return users;
};
