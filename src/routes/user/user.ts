import { IncomingMessage, ServerResponse } from "http";
import { db } from "../../db";
import { generateResponse } from "../../helpers";
import { Message, Method } from "../../constants";
import { UserId } from "../../db/types";

export const userRoute = async (
  request: IncomingMessage,
  response: ServerResponse,
  userId: UserId
) => {
  const user = db.getUserById(userId);

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
