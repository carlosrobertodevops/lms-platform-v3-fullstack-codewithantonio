import { auth } from '@clerk/nextjs';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

interface ContextProps {
  params: { courseId: 'string' };
}

export async function PATCH(request: NextRequest, { params }: ContextProps) {
  try {
    const { userId } = auth();
    const values = await request.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const course = await db.course.update({
      where: {
        id: params.courseId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log('[COURSE_ID]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
