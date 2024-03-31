import { NextRequest, NextResponse } from 'next/server';

interface ContextProps {
  params: { courseId: 'string' };
}

export async function POST(request: NextRequest, { params }: ContextProps) {
  try {
  } catch (error) {
    console.log('[ATTACHMENTS]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
