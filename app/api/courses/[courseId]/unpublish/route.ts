import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

interface ContextProps {
  params: {
    Id: string;
  };
}

export async function PATCH(request: Request, { params }: ContextProps) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: {
        id: params.Id,
        userId
      },
    });

    if (!courseOwner) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const unpubishedChapter = await db.course.update({
      where: {
        id: params.Id
      },
      data: {
        isPublished: false,
      }
    });

    const publishedChaptersInCourse = await db. chapter.findMany ({
      where: {
        courseId: params. courseId, isPublished: true,
        }
    });

    if (!publishedChaptersInCourse.length) {
      await db.course.update({
        where: {
          id: params. courseId,
        },
        data: {
          isPublished: false,
        }
      });
    }

    return NextResponse.json(unpubishedChapter);

  } catch (error) {
    console.log('[CHAPTER_UNPUBLISH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}