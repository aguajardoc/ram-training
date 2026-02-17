-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('GENERAL', 'VIDEO', 'WEBSITE', 'DEMO', 'BOOK', 'ARTICLE', 'GITHUB');

-- CreateTable
CREATE TABLE "Resource" (
    "id" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "type" "ResourceType" NOT NULL DEFAULT 'GENERAL',
    "description" TEXT,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;
