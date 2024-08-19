import { db } from "@/lib/db";
import type { Category, Chapter, Course } from "@prisma/client";
import { getProgress } from "@/actions/get-progress";
import { currentUser } from '@clerk/nextjs/server';
import { isTeacher } from '@/lib/teacher';
import { redirect } from 'next/navigation';
// import { auth, currentUser } from '@clerk/nextjs/server';

type CourseWithProgressWithCategory = Course & {
  category: Category;
  chapters: Chapter[];
  progress: number | null;
};

type DashboardCourses = {
  completedCourses: CourseWithProgressWithCategory[];
  coursesInProgress: CourseWithProgressWithCategory[];
}

export const getDashboardCourses = async (userId: string | null): Promise<DashboardCourses> => {
  try {

    const isAutorized = isTeacher(userId);


    if (!userId) {
      userId: await currentUser();
      if (!userId) {
        return redirect("/");
      }
      return redirect("/");
    }

    const purchasedCourses = await db.purchase.findMany({
      where: {
        userId: userId,
      },
      select: {
        course: {
          include: {
            category: true,
            chapters: {
              where: {
                isPublished: true,
              }
            }
          }
        }
      }
    });

    const courses = purchasedCourses.map((purchase) => purchase.course) as CourseWithProgressWithCategory[];

    for (let course of courses) {
      const progress = await getProgress(userId, course.id);
      course["progress"] = progress;
    }

    const completedCourses = courses.filter((course) => course.progress === 100);
    const coursesInProgress = courses.filter((course) => (course.progress ?? 0) < 100);

    return {
      completedCourses,
      coursesInProgress,
    };

  } catch (error) {
    console.log("[GET_DASHBOARD_COURSES]", error);
    return {
      completedCourses: [],
      coursesInProgress: [],
    };
  }
}