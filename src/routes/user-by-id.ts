import { IncomingMessage, ServerResponse } from "http";
import { generateResponse } from "../helpers";
import { getUserById } from "../db";
import { Message, Method } from "../constants";
import { UserId } from "../types";

export const userById = async (
  request: IncomingMessage,
  response: ServerResponse,
  userId: UserId
) => {
  const user = getUserById(userId);

  switch (request.method) {
    case Method.GET:
      if (!user) {
        generateResponse(404, Message.NOT_FOUND_USER, response);

        return;
      }

      generateResponse(200, user, response);

      break;
    case Method.POST:
      break;
    case Method.PUT:
      break;
    case Method.DELETE:
      break;
    default:
      generateResponse(404, Message.NOT_FOUND, response);
  }
};
