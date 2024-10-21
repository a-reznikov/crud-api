import { v4 as uuidv4 } from "uuid";

export type User = {
  id: typeof uuidv4;
  username: string;
  age: number;
  hobbies: string[];
};
