/*
  Warnings:

  - Changed the type of `customerid` on the `QuizSubmission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "QuizSubmission" DROP COLUMN "customerid",
ADD COLUMN     "customerid" INTEGER NOT NULL;
