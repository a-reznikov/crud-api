import { createServer } from "http";
import { env } from "process";
import { config } from "dotenv";

config();

const PORT = env.PORT ?? 3000;

export const server = createServer(async (request, response): Promise<void> => {
  console.log(request);
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
