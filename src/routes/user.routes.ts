import { Router } from "express";
import { CreaUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { CreateEnrollmentController } from "../modules/courses/useCases/createEnrollment/CreateEnrollmentController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";

const creaUserController = new CreaUserController();
const createEnrollmentController = new CreateEnrollmentController();
const getAllUsersUseCase = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", creaUserController.handle);
userRoutes.post("/matricula", createEnrollmentController.handle);
userRoutes.get("/", getAllUsersUseCase.handle);

export { userRoutes };