/*
  Warnings:

  - Made the column `diaryId` on table `DiaryGoal` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `DiaryGoal` DROP FOREIGN KEY `DiaryGoal_diaryId_fkey`;

-- AlterTable
ALTER TABLE `DiaryGoal` MODIFY `diaryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `DiaryGoal` ADD CONSTRAINT `DiaryGoal_diaryId_fkey` FOREIGN KEY (`diaryId`) REFERENCES `Diary`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
