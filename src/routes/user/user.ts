import { IncomingMessage, ServerResponse } from "http";
import { db } from "../../db";
import { generateResponse } from "../../helpers";
import { Message, Method } from "../../constants";
import { UserId } from "../../db/types";
import { updateUser } from "./updateUser";

export const userRoute = async (
  request: IncomingMessage,
  response: ServerResponse,
  userId: UserId
) => {
  const user = db.getUserById(userId);

  if (!user) {
    generateResponse(404, Message.NOT_FOUND_USER, response);

    return;
  }

  switch (request.method) {
    case Method.GET:
      generateResponse(200, user, response);

      break;
    case Method.PUT:
      await updateUser(request, response, user);

      break;
    case Method.DELETE:
      generateResponse(204, db.deleteUser(userId), response);

      break;
    default:
      generateResponse(404, Message.NOT_FOUND, response);
  }
};
