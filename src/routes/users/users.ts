import { IncomingMessage, ServerResponse } from "http";
import { db } from "../../db";
import { generateResponse } from "../../helpers";
import { Message, Method } from "../../constants";
import { usersPost } from "./post";

export const usersRoute = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  switch (request.method) {
    case Method.GET:
      generateResponse(200, db.getAllUsers(), response);

      break;
    case Method.POST:
      await usersPost(request, response);
      break;
    case Method.PUT:
      break;
    case Method.DELETE:
      break;
    default:
      generateResponse(404, Message.NOT_FOUND, response);
  }
};
