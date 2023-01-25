import { Router } from "next/router";
import { useEffect } from "react";
import App from "./App";

const routes = new Router();

routes.get("/CleaningSupplies", async (req, res) => {
  return App.render(req, res, "/CleaningSupplies", req.query);
});

export default routes;
