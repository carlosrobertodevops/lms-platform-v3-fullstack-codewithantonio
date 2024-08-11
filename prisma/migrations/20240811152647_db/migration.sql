/*
  Warnings:

  - A unique constraint covering the columns `[userId,courseId]` on the table `Purchase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "Course_categoryId_idx" ON "Course"("categoryId");

-- CreateIndex
CREATE INDEX "Purchase_courseId_idx" ON "Purchase"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_userId_courseId_key" ON "Purchase"("userId", "courseId");

-- CreateIndex
CREATE INDEX "UserProgress_chapterId_idx" ON "UserProgress"("chapterId");
