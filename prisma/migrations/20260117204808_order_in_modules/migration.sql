/*
  Warnings:

  - Added the required column `order` to the `ModuleProblem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ModuleProblem" ADD COLUMN     "order" INTEGER NOT NULL;
