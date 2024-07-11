/*
  Warnings:

  - Made the column `enabled` on table `Survey` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Survey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT,
    "sub_type" TEXT,
    "status" TEXT,
    "visible" BOOLEAN,
    "enabled" BOOLEAN NOT NULL
);
INSERT INTO "new_Survey" ("description", "enabled", "id", "name", "status", "sub_type", "type", "visible") SELECT "description", "enabled", "id", "name", "status", "sub_type", "type", "visible" FROM "Survey";
DROP TABLE "Survey";
ALTER TABLE "new_Survey" RENAME TO "Survey";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
