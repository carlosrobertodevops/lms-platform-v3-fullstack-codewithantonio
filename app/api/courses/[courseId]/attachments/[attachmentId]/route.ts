import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

interface ContextProps {
  params: { courseId: 'string'; attachmentId: 'string' };
}

export async function DELETE(request: NextRequest, { params }: ContextProps) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  } catch (error) {
    console.log('[ATTACHMENT_ID]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
