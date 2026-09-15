import { Router } from "express";
import { v4 } from "uuid";
import User from "./app/models/users.js";
import usercontroller from "./app/controllers/userscontroller.js"

const routes = new Router();
routes.post("/users", usercontroller.store);

export default routes;
