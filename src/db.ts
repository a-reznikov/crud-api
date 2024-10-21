import { User, UserId } from "./types";

export const users: User[] = [];

export const getAllUsers = () => users;

export const getUserById = (userId: UserId) =>
  users.find(({ id }) => id === userId);
