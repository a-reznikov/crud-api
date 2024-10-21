import { IncomingMessage, ServerResponse } from "http";
import { generateResponse } from "../helpers";
import { getAllUsers } from "../db";
import { Message } from "../constants";

export const get = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  switch (request.url) {
    case "/api/users": {
      generateResponse(200, getAllUsers(), response);
      break;
    }

    default:
      generateResponse(404, Message.NOT_FOUND, response);
  }
};
