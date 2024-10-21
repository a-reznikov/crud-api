import { IncomingMessage, ServerResponse } from "http";
import { validate as isValidUuid } from "uuid";
import { Message, Route } from "../constants";
import { generateResponse } from "../helpers/response";
import { userRoute } from "./user/user";
import { usersRoute } from "./users/users";

export const handleRoutes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  try {
    const { url } = request;

    if (!url) {
      generateResponse(404, Message.NOT_FOUND, response);

      return;
    }

    if (url.startsWith(Route.USER_BY_ID)) {
      const [, userId] = url.split(Route.USER_BY_ID);

      if (isValidUuid(userId)) {
        await userRoute(request, response, userId);

        return;
      }

      generateResponse(400, Message.INVALID_USER_ID, response);

      return;
    }

    if (url === Route.USERS) {
      await usersRoute(request, response);

      return;
    }

    generateResponse(404, Message.NOT_FOUND, response);
  } catch (error) {
    generateResponse(500, Message.SERVER_ERROR, response);
  }
};
