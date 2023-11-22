import { Router } from "express";
import { CreaUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { CreateEnrollmentController } from "../modules/courses/useCases/createEnrollment/CreateEnrollmentController";

const creaUserController = new CreaUserController();
const createEnrollmentController = new CreateEnrollmentController();

const userRoutes = Router();

userRoutes.post("/", creaUserController.handle);
userRoutes.post("/matricula", createEnrollmentController.handle);

export { userRoutes };