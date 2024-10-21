import { createServer } from "http";
import "dotenv/config";
import { handleRoutes } from "./routes";

const PORT = process.env.PORT ?? 3000;

export const server = createServer(async (request, response): Promise<void> => {
  await handleRoutes(request, response);
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
