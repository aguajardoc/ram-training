/*
  Warnings:

  - The primary key for the `LevelModule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Module` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ModuleProblem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type` on the `ModuleProblem` table. All the data in the column will be lost.
  - The primary key for the `Problems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Solve` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `codeTime` on the `Solve` table. All the data in the column will be lost.
  - You are about to drop the column `debugTime` on the `Solve` table. All the data in the column will be lost.
  - You are about to drop the column `readTime` on the `Solve` table. All the data in the column will be lost.
  - You are about to drop the column `thinkTime` on the `Solve` table. All the data in the column will be lost.
  - The primary key for the `Track` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TrackLevel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserTrack` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[url]` on the table `Problems` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `problemType` to the `ModuleProblem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codeTimeMinutes` to the `Solve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `debugTimeMinutes` to the `Solve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `readTimeMinutes` to the `Solve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thinkTimeMinutes` to the `Solve` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "LevelModule" DROP CONSTRAINT "LevelModule_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "LevelModule" DROP CONSTRAINT "LevelModule_trackLevelId_fkey";

-- DropForeignKey
ALTER TABLE "ModuleProblem" DROP CONSTRAINT "ModuleProblem_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "Solve" DROP CONSTRAINT "Solve_problemId_fkey";

-- DropForeignKey
ALTER TABLE "Solve" DROP CONSTRAINT "Solve_userId_fkey";

-- DropForeignKey
ALTER TABLE "TrackLevel" DROP CONSTRAINT "TrackLevel_trackId_fkey";

-- DropForeignKey
ALTER TABLE "UserTrack" DROP CONSTRAINT "UserTrack_trackId_fkey";

-- DropForeignKey
ALTER TABLE "UserTrack" DROP CONSTRAINT "UserTrack_userId_fkey";

-- AlterTable
ALTER TABLE "LevelModule" DROP CONSTRAINT "LevelModule_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "trackLevelId" SET DATA TYPE TEXT,
ALTER COLUMN "moduleId" SET DATA TYPE TEXT,
ADD CONSTRAINT "LevelModule_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "LevelModule_id_seq";

-- AlterTable
ALTER TABLE "Module" DROP CONSTRAINT "Module_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Module_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Module_id_seq";

-- AlterTable
ALTER TABLE "ModuleProblem" DROP CONSTRAINT "ModuleProblem_pkey",
DROP COLUMN "type",
ADD COLUMN     "problemType" "ProblemType" NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "moduleId" SET DATA TYPE TEXT,
ALTER COLUMN "problemId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ModuleProblem_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ModuleProblem_id_seq";

-- AlterTable
ALTER TABLE "Problems" DROP CONSTRAINT "Problems_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "name" DROP DEFAULT,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "url" DROP DEFAULT,
ALTER COLUMN "url" SET DATA TYPE TEXT,
ADD CONSTRAINT "Problems_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Problems_id_seq";

-- AlterTable
ALTER TABLE "Solve" DROP CONSTRAINT "Solve_pkey",
DROP COLUMN "codeTime",
DROP COLUMN "debugTime",
DROP COLUMN "readTime",
DROP COLUMN "thinkTime",
ADD COLUMN     "codeTimeMinutes" INTEGER NOT NULL,
ADD COLUMN     "debugTimeMinutes" INTEGER NOT NULL,
ADD COLUMN     "mood" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "readTimeMinutes" INTEGER NOT NULL,
ADD COLUMN     "thinkTimeMinutes" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "problemId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Solve_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Solve_id_seq";

-- AlterTable
ALTER TABLE "Track" DROP CONSTRAINT "Track_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Track_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Track_id_seq";

-- AlterTable
ALTER TABLE "TrackLevel" DROP CONSTRAINT "TrackLevel_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "trackId" SET DATA TYPE TEXT,
ADD CONSTRAINT "TrackLevel_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TrackLevel_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "UserTrack" DROP CONSTRAINT "UserTrack_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "trackId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserTrack_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserTrack_id_seq";

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "access_token" TEXT,
    "refresh_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Problems_url_key" ON "Problems"("url");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "TrackLevel" ADD CONSTRAINT "TrackLevel_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelModule" ADD CONSTRAINT "LevelModule_trackLevelId_fkey" FOREIGN KEY ("trackLevelId") REFERENCES "TrackLevel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelModule" ADD CONSTRAINT "LevelModule_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleProblem" ADD CONSTRAINT "ModuleProblem_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleProblem" ADD CONSTRAINT "ModuleProblem_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solve" ADD CONSTRAINT "Solve_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solve" ADD CONSTRAINT "Solve_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTrack" ADD CONSTRAINT "UserTrack_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTrack" ADD CONSTRAINT "UserTrack_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
