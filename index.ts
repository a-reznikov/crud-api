import { createServer } from "http";

export const server = createServer(async (req, res): Promise<void> => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Response",
    })
  );
});

server.listen(3000, () => {
  console.log(`Server started: http://localhost:3000`);
});
