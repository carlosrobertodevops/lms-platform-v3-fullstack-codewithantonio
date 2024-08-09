import { db } from "@/lib/db";

export const getProgress = async (
  userId: string,
  courseId: string,
): Promise<number> => {
  try {
    const publishChapters = await db.chapter.findMany({
      where: {
        courseId: courseId,
        isPublished: true,
      },
      select: {
        id: true,
      }
    });

    const publishedChapterIds = publishChapters.map((chapter) => chapter.id);

    const validCompletedChapters = await db.userProgress.count({
      where: {
        userId: userId,
        chapterId: {
          in: publishedChapterIds,
        },
        isCompleted: true,
      }
    });

    const progressPercentage = (validCompletedChapters / publishedChapterIds.length) * 100;

    return progressPercentage;

  } catch (error) {
    console.log("[GET_PROGRESS]", error);
    return 0
  }
}