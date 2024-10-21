import { ServerResponse } from "http";
import { User } from "../types";

export const generateResponse = (
  status: number,
  data: string | User | User[],
  response: ServerResponse
) => {
  response.writeHead(status, { "Content-Type": "application/json" });
  response.write(JSON.stringify(data));

  response.end();
};
