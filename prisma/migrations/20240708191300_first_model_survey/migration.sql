-- CreateTable
CREATE TABLE "Survey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT,
    "sub_type" TEXT,
    "status" TEXT,
    "visible" BOOLEAN,
    "enabled" BOOLEAN NOT NULL
);
