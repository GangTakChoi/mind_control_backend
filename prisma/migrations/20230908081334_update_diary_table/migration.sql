/*
  Warnings:

  - Made the column `userId` on table `Diary` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Diary` DROP FOREIGN KEY `Diary_userId_fkey`;

-- AlterTable
ALTER TABLE `Diary` MODIFY `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Diary` ADD CONSTRAINT `Diary_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
