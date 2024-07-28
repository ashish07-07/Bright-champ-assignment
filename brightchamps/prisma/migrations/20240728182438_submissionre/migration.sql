/*
  Warnings:

  - Added the required column `score` to the `QuizSubmission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizSubmission" ADD COLUMN     "score" INTEGER NOT NULL;
