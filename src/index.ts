import { createServer } from "http";
import "dotenv/config";
import { Message, Method } from "./constants";
import { get } from "./methods";
import { generateResponse } from "./helpers";

const PORT = process.env.PORT ?? 3000;

export const server = createServer(async (request, response): Promise<void> => {
  switch (request.method) {
    case Method.GET:
      get(request, response);
      break;

    case Method.POST:
      break;

    case Method.PUT:
      break;

    case Method.DELETE:
      break;

    default:
      // Send response for requests with no other response
      generateResponse(404, Message.NOT_FOUND, response);
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
