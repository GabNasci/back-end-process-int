import { Request, Response } from "express";
import { CreateCourseUseCase } from "./CreateCourseUseCase";
import { GetCoursesByNameUseCase } from "./GetCoursesByNameUseCase";


export class GetCoursesByNameController {
    async handle(req: Request, res: Response) {

        const getCoursesByNameUseCase = new GetCoursesByNameUseCase();

        const result = await getCoursesByNameUseCase.execute();

        return res.status(201).json(result);
    }
}