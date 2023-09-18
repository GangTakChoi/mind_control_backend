/*
  Warnings:

  - You are about to drop the column `isComplated` on the `DiaryGoal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `DiaryGoal` DROP COLUMN `isComplated`,
    ADD COLUMN `isCompleted` BOOLEAN NOT NULL DEFAULT false;
