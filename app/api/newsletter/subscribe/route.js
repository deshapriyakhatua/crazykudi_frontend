import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body?.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Subscribed successfully!' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
