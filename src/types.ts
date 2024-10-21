import { v4 as uuidv4 } from "uuid";

export type UserId = string | typeof uuidv4;

export type User = {
  id: UserId;
  username: string;
  age: number;
  hobbies: string[];
};
