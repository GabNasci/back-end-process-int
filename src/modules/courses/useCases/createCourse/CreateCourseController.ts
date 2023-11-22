import { Request, Response } from "express";
import { CreateCourseUseCase } from "./CreateCourseUseCase";


export class CreateCourseController {
    async handle(req: Request, res: Response) {
        const { name,
            description,
            time,
            level,
            modality,
            value,
            image,
            icon } = req.body;

        const createCourseUseCase = new CreateCourseUseCase();

        const result = await createCourseUseCase.execute({
            name,
            description,
            time,
            level,
            modality,
            value,
            image,
            icon
        });

        return res.status(201).json(result);
    }
}