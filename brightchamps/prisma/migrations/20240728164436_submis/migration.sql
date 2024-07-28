/*
  Warnings:

  - Added the required column `customerid` to the `QuizSubmission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizSubmission" ADD COLUMN     "customerid" INTEGER NOT NULL;
