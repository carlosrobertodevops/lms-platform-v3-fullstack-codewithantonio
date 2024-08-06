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

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId
      },
    });

    if (!course) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const muxData = await db.muxData.findUnique({
      where: {
        courseId: params.courseId
      }
    });

    if (!course || !muxData || !course.title || !course.description || !course.imageUrl || !course.price) {
      return new NextResponse('Missing required fields', { status: 400 });
    };

    const pubishedCourse = await db.course.update({
      where: {
        id:params.courseId,
      },
      data: {
        isPublished: true,
      }
    });

    return NextResponse.json(pubishedCourse);

  } catch (error) {
    console.log('[COURSE_PUBLISH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}