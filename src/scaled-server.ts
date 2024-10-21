import { createServer } from "http";
import { config } from "dotenv";
import process from "process";
import cluster from "cluster";
import { cpus } from "os";
import { handleRoutes } from "./routes";

config();

const PORT = process.env.PORT ?? 3000;

const cpusCount = cpus().length;

if (cluster.isPrimary) {
  cluster.schedulingPolicy = cluster.SCHED_RR;

  for (let i = 0; i < cpusCount; i += 1) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code) => {
    if (code && !worker.exitedAfterDisconnect) {
      console.log(`${worker.process.pid} failed`);

      cluster.fork();
    }
  });
} else {
  const app = createServer(async (request, response): Promise<void> => {
    await handleRoutes(request, response);
  });

  app.listen(PORT);

  const workerPort = +PORT + (cluster.worker?.id ?? process.pid);

  app.listen(workerPort);

  console.log(
    `Worker #${process.pid} started -> 'http://localhost:${workerPort}`
  );
}
