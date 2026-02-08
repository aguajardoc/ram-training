-- CreateTable
CREATE TABLE "LevelToTrack" (
    "id" TEXT NOT NULL,
    "levelId" TEXT NOT NULL,
    "trackId" TEXT NOT NULL,

    CONSTRAINT "LevelToTrack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LevelToTrack_levelId_trackId_key" ON "LevelToTrack"("levelId", "trackId");
