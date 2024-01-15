import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();
    const { title } = await request.json();
  } catch (error) {
    console.log('[COURSES]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
