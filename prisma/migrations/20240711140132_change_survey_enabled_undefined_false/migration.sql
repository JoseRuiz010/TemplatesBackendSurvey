-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "password" TEXT,
    "phone" TEXT,
    "profileImage" TEXT,
    "status" TEXT,
    "lastSeen" TEXT
);

-- CreateTable
CREATE TABLE "Survey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT,
    "sub_type" TEXT,
    "status" TEXT,
    "visible" BOOLEAN,
    "enabled" BOOLEAN
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
