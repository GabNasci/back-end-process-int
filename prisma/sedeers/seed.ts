import { courses } from "./courses";
import { prisma } from "../../src/prisma/client";

async function main() {
    for (let course of courses) {
        await prisma.course.create({
            data: course
        })
    }
    
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})