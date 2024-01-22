import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest) {
  try {
    const { userId } = auth();
    const values = await request.json();
  } catch (error) {
    console.log('[COURSE_ID]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
