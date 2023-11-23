import { Course } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateCourseDTO } from "../../dtos/CreateCourseDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateCourseUseCase {
    async execute({ name,
        description,
        time,
        level,
        modality,
        value,
        image,
        icon }: CreateCourseDTO): Promise<Course> {
        // Verifica se já existe
        const courseAlreadyExists = await prisma.course.findUnique({
            where: {
                name,
            }
        });

        // trata erro
        if (courseAlreadyExists) {
            throw new AppError("Curso já existe!");
        }

        const course = await prisma.course.create({
            data: {
                name,
                description,
                time,
                level,
                modality,
                value,
                image,
                icon
            }
        })

        return course;

    }
}