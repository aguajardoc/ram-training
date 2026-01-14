/*
  Warnings:

  - Added the required column `launchDate` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "launchDate" TIMESTAMP(3) NOT NULL;
