import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateEnrollmentDTO } from "../../dtos/CreateEnrollmentDTO";

export class CreateEnrollmentUseCase {
    async execute({ userId, courseId }: CreateEnrollmentDTO): Promise<void>{
        //verifica se curso existe
        const courseExists = await prisma.course.findUnique({
            where: {
                id: courseId
            }
        });

        if(!courseExists) {
            throw new AppError("Curso não existe!")
        }

        //verifica se usuário existe
        const userExists = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if(!userExists) {
            throw new AppError("Usuário não existe!")
        }


        //cria matrícula
        await prisma.enrollment.create({
            data: {
                userId,
                courseId,
            },
        });

    }
}