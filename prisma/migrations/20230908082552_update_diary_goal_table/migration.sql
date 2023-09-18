/*
  Warnings:

  - You are about to drop the column `complated` on the `DiaryGoal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `DiaryGoal` DROP COLUMN `complated`,
    ADD COLUMN `isComplated` BOOLEAN NOT NULL DEFAULT false;
