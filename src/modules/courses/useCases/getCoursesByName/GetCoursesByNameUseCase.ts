import { Course } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetCoursesByNameUseCase {
    async execute(): Promise<Course[]> {
        const courses = await prisma.course.findMany({
            orderBy: {
                name: "asc"
            }
        });

        return courses;
    }
}