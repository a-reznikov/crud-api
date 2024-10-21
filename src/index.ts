import { createServer } from "http";
import { config } from "dotenv";
import { handleRoutes } from "./routes";

config();

const PORT = process.env.PORT ?? 3000;

export const server = createServer(async (request, response): Promise<void> => {
  await handleRoutes(request, response);
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
