import { IncomingMessage, ServerResponse } from "http";
import { validate as isValidUuid } from "uuid";
import { Message, Route } from "../constants";
import { generateResponse } from "../helpers/response";
import { userById } from "./user-by-id";

export const handleRoutes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const { url } = request;

  if (!url) {
    generateResponse(404, Message.NOT_FOUND, response);

    return;
  }

  if (url.startsWith(Route.USER_BY_ID)) {
    const [, userId] = url.split(Route.USER_BY_ID);

    if (isValidUuid(userId)) {
      await userById(request, response, userId);
      console.log("Valid", userId);
    }

    console.log("Invalid", userId);

    return;
  }

  if (url === Route.USERS) {
    console.log(Route.USERS);

    return;
  }

  generateResponse(404, Message.NOT_FOUND, response);
};
