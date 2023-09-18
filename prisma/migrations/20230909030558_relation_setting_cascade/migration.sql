-- DropForeignKey
ALTER TABLE `Diary` DROP FOREIGN KEY `Diary_userId_fkey`;

-- DropForeignKey
ALTER TABLE `DiaryGoal` DROP FOREIGN KEY `DiaryGoal_diaryId_fkey`;

-- DropForeignKey
ALTER TABLE `Goal` DROP FOREIGN KEY `Goal_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Goal` ADD CONSTRAINT `Goal_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Diary` ADD CONSTRAINT `Diary_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiaryGoal` ADD CONSTRAINT `DiaryGoal_diaryId_fkey` FOREIGN KEY (`diaryId`) REFERENCES `Diary`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
