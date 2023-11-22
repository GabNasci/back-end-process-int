import { Router } from "express";
import { CreateCourseController } from "../modules/courses/useCases/createCourse/CreateCourseController";
import { GetCoursesByNameController } from "../modules/courses/useCases/getCoursesByName/GetCoursesByNameController";


const creaCourseController = new CreateCourseController();
const getCoursesByNameController = new GetCoursesByNameController();

const courseRoutes = Router();

courseRoutes.post("/", creaCourseController.handle);
courseRoutes.get("/name", getCoursesByNameController.handle);


export { courseRoutes };