import { Router } from "express";
import { userRoutes } from "./user.routes";
import { courseRoutes } from "./course.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/courses", courseRoutes);

export { routes };

