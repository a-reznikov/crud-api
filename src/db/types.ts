import { v4 as uuidv4 } from "uuid";

export type UserId = string | typeof uuidv4;

export type UserData = {
  username: string;
  age: number;
  hobbies: string[];
};

export type User = UserData & {
  id: UserId;
};
