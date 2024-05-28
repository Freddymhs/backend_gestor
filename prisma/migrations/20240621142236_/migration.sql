/*
  Warnings:

  - You are about to drop the column `userId` on the `Permissions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Permissions" DROP CONSTRAINT "Permissions_userId_fkey";

-- AlterTable
ALTER TABLE "Permissions" DROP COLUMN "userId";
