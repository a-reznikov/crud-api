import { IncomingMessage, ServerResponse } from "http";
import { generateResponse, isUserData } from "../../helpers";
import { Message } from "../../constants";
import { User, db } from "../../db";

export const addNewUser = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  let data = "";

  request.on("data", (chunk: any) => {
    data += chunk.toString();
  });

  request.on("end", async () => {
    const body = JSON.parse(data);

    if (!isUserData(body)) {
      generateResponse(400, Message.INVALID_DATA, response);

      return;
    }

    const newUser: User = db.addUser(body);

    generateResponse(201, newUser, response);
  });
};
