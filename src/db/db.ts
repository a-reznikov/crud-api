import { v4 as uuidv4 } from "uuid";
import { User, UserData, UserId } from "./types";

export const users: User[] = [];

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
  const userIndex = users.findIndex((user) => user.id === preparedUser.id);

  if (userIndex < 0) {
    return undefined;
  }

  users[userIndex] = preparedUser;

  return users[userIndex];
};
