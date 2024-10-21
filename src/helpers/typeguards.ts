import { UserData } from "../db";

export const isUserData = (data: Record<string, unknown>): data is UserData =>
  Boolean(
    data.username &&
      data.age &&
      data.hobbies &&
      typeof data.username === "string" &&
      typeof data.age === "number" &&
      Array.isArray(data.hobbies) &&
      data.hobbies.every((hobbie) => typeof hobbie === "string")
  );
