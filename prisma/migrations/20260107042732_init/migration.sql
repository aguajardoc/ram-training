-- CreateEnum
CREATE TYPE "ProblemDifficulty" AS ENUM ('EASY', 'NORMAL', 'HARD');

-- CreateEnum
CREATE TYPE "ProblemType" AS ENUM ('PRACTICE', 'CONTEST');

-- CreateTable
CREATE TABLE "Problems" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR NOT NULL DEFAULT 'TEST PROBLEM',
    "url" VARCHAR NOT NULL DEFAULT 'https://codeforces.com/problemset/problem/4/A',

    CONSTRAINT "Problems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrackLevel" (
    "id" BIGSERIAL NOT NULL,
    "trackId" BIGINT NOT NULL,
    "code" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "TrackLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LevelModule" (
    "id" BIGSERIAL NOT NULL,
    "trackLevelId" BIGINT NOT NULL,
    "moduleId" BIGINT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "LevelModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Module" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleProblem" (
    "id" BIGSERIAL NOT NULL,
    "moduleId" BIGINT NOT NULL,
    "problemId" BIGINT NOT NULL,
    "type" "ProblemType" NOT NULL,
    "difficulty" "ProblemDifficulty" NOT NULL,

    CONSTRAINT "ModuleProblem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solve" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "problemId" BIGINT NOT NULL,
    "submitCount" INTEGER NOT NULL,
    "readTime" INTEGER NOT NULL,
    "thinkTime" INTEGER NOT NULL,
    "codeTime" INTEGER NOT NULL,
    "debugTime" INTEGER NOT NULL,
    "onYourOwn" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Solve_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTrack" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "trackId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserTrack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TrackLevel_trackId_code_key" ON "TrackLevel"("trackId", "code");

-- CreateIndex
CREATE UNIQUE INDEX "LevelModule_trackLevelId_moduleId_key" ON "LevelModule"("trackLevelId", "moduleId");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleProblem_moduleId_problemId_key" ON "ModuleProblem"("moduleId", "problemId");

-- CreateIndex
CREATE UNIQUE INDEX "Solve_userId_problemId_key" ON "Solve"("userId", "problemId");

-- CreateIndex
CREATE UNIQUE INDEX "UserTrack_userId_trackId_key" ON "UserTrack"("userId", "trackId");

-- AddForeignKey
ALTER TABLE "TrackLevel" ADD CONSTRAINT "TrackLevel_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelModule" ADD CONSTRAINT "LevelModule_trackLevelId_fkey" FOREIGN KEY ("trackLevelId") REFERENCES "TrackLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LevelModule" ADD CONSTRAINT "LevelModule_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleProblem" ADD CONSTRAINT "ModuleProblem_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solve" ADD CONSTRAINT "Solve_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solve" ADD CONSTRAINT "Solve_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTrack" ADD CONSTRAINT "UserTrack_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTrack" ADD CONSTRAINT "UserTrack_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
