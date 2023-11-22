import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute({name, email, phone, date, cep, cpf, document}: CreateUserDTO): Promise<User> {
        // Verifica se já existe
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        // trata erro
        if(userAlreadyExists) {
            
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                phone,
                date,
                cep,
                cpf,
                document

            }
        })

        return user;

    }
}