import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

interface ContextProps {
  params: {
    courseId: string;
    chapterId: string;
  };
}

export async function PATCH(request: NextRequest, { params }: ContextProps) {
  try {
    const { userId } = auth();
    const values = await request.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: { id: params.courseId, userId },
    });

    if (!courseOwner) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const chapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: { ...values },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.log('[CHAPTER_ID]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
