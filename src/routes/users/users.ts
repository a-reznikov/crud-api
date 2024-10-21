import { IncomingMessage, ServerResponse } from "http";
import { db } from "../../db";
import { generateResponse } from "../../helpers";
import { Message, Method } from "../../constants";
import { addNewUser } from "./addNewUser";

export const usersRoute = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  switch (request.method) {
    case Method.GET:
      generateResponse(200, db.getAllUsers(), response);

      break;
    case Method.POST:
      await addNewUser(request, response);

      break;

    default:
      generateResponse(404, Message.NOT_FOUND, response);
  }
};
