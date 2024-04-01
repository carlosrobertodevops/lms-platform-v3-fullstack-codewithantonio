import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
  } catch (error) {
    console.log('[CHAPTERS]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
