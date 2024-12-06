import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { todoRoute } from "./routes/todo";

const apiApp = new Elysia();

// Apply the swagger plugin
apiApp.use(swagger());

// Group routes under /api
apiApp.group("/api", (app) => app.use(todoRoute));

// Start the server
apiApp.listen(3000);

console.log(
  `🦊 Elysia is running at ${apiApp.server?.hostname}:${apiApp.server?.port}`
);