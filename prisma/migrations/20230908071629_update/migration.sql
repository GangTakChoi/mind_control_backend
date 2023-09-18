/*
  Warnings:

  - Made the column `userId` on table `Goal` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Goal` DROP FOREIGN KEY `Goal_userId_fkey`;

-- AlterTable
ALTER TABLE `Goal` MODIFY `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Goal` ADD CONSTRAINT `Goal_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
