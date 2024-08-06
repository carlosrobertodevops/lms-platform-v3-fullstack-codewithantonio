import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

interface ContextProps {
  params: {
    courseId: string;
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
        id: params.courseId,
        userId
      },
    });

    if (!courseOwner) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const muxData = await db.muxData.findUnique({
      where: {
        courseId: params.courseId
      }
    });

    if (!courseOwner || !muxData || !chapter.title || !chapter.description || !chapter.videoUrl) {
      return new NextResponse('Missing required fields', { status: 400 });
    };

    const pubishedChapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        isPublished: true,
      }
    });

    return NextResponse.json(pubishedChapter);

  } catch (error) {
    console.log('[CHAPTER_PUBLISH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}