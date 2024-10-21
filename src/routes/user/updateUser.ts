import { IncomingMessage, ServerResponse } from "http";
import { generateResponse, isUserData } from "../../helpers";
import { Message } from "../../constants";
import { User, db } from "../../db";

export const updateUser = async (
  request: IncomingMessage,
  response: ServerResponse,
  user: User
) => {
  let data = "";

  request.on("data", (chunk: any) => {
    data += chunk.toString();
  });

  request.on("end", async () => {
    const body = JSON.parse(data);

    const preparedUser = {
      username: body.username || user.username,
      age: body.age || user.age,
      hobbies: body.hobbies || user.hobbies,
    };

    if (!isUserData(preparedUser)) {
      generateResponse(400, Message.INVALID_DATA, response);

      return;
    }

    const updatedUser: User | undefined = db.updateUser({
      id: user.id,
      ...preparedUser,
    });

    if (!updatedUser) {
      generateResponse(404, Message.NOT_FOUND_USER, response);

      return;
    }

    generateResponse(200, updatedUser, response);
  });
};
