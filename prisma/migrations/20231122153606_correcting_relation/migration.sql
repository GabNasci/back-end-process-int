/*
  Warnings:

  - The primary key for the `enrollments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `enrollments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "enrollments" DROP CONSTRAINT "enrollments_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "enrollments_pkey" PRIMARY KEY ("userId", "courseId");
