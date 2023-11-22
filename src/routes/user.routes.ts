import { Router } from "express";
import { CreaUserController } from "../modules/users/useCases/createUser/CreateUserController";

const creaUserController = new CreaUserController();

const userRoutes = Router();

userRoutes.post("/", creaUserController.handle);

export { userRoutes };