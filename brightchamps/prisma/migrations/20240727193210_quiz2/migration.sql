/*
  Warnings:

  - You are about to drop the column `answer` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `options` on the `Quiz` table. All the data in the column will be lost.
  - Changed the type of `questions` on the `Quiz` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "answer",
DROP COLUMN "options",
DROP COLUMN "questions",
ADD COLUMN     "questions" JSONB NOT NULL;
