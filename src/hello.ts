import { type FastifyInstance } from "fastify";

export function registerRoutes(fastify: FastifyInstance) {
  fastify.get("/hello", async function handler(request, reply) {
    return "Hello World";
  });
}
