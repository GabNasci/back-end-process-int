import { Request, Response } from "express";
import { CreateEnrollmentUseCase } from "./CreateEnrollmentUseCase";


export class CreateEnrollmentController {
    async handle(req: Request, res: Response) {
        const { userId, courseId } = req.body;

        const createEnrollmentUseCase = new CreateEnrollmentUseCase();

        await createEnrollmentUseCase.execute({
            userId,
            courseId
        });

        return res.status(201).send();
    }
}