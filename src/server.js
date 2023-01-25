import express from "express";
import next from "next";
import routes from "./routes";
const dev = process.env.NODE_ENV !== "production";

// eslint-disable-next-line no-undef
const app = next({ dev });
const handler = routes.getRequestHandler(app, {});

app.prepare().then(() => {
  const server = express();

  server.use(handler);

  server.listen(3000);
});
