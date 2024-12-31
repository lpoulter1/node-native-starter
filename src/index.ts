import Fastify from "fastify";
import pino from "pino";
import { registerRoutes } from "./hello.ts";

const prettyPrint = pino.transport({
  target: "pino-pretty",
  options: {
    colorize: true,
  },
});

const fastify = Fastify({
  logger: {
    stream: prettyPrint,
  },
});

// Register routes
registerRoutes(fastify);

try {
  await fastify.listen({ port: parseInt(process.env.PORT || "3000") });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}

export { fastify };
