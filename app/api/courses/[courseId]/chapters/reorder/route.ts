import { NextRequest, NextResponse } from 'next/server';

interface ContextProps {
  params: { courseId: 'string' };
}

export async function PATCH(request: NextRequest, { params }: ContextProps) {
  try {
  } catch (error) {
    console.log('[REORDER]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
