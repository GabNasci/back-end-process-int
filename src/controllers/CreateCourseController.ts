import { Request, Response } from 'express' 
import { prismaClient } from '../database/prismaClient';

export class CreateCourseController {
    async handle(request: Request, response: Response) {

        const { name, description, time, level, modality, value, image, icon } = request.body;

        const course = await prismaClient.course.create({
            data: {
                name,
                description,
                level,
                modality,
                time,
                image,
                value,
                icon


            }
        })

        return response.json();
    }
}
