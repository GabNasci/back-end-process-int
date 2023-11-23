import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreaUserController {
    async handle(req: Request, res: Response){
        const { name, email, phone, date, cep, cpf, document } = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({name, email, phone, date, cep, cpf, document});

        return res.status(201).json(result);
    }
}