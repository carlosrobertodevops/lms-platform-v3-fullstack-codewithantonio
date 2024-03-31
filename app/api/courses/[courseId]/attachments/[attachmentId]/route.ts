import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest) {
  try {
  } catch (error) {
    console.log('[ATTACHMENT_ID]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
