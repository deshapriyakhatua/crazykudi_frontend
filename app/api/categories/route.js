import { NextResponse } from 'next/server';

export async function GET() {
  const categories = [
    { id: 1, name: 'Dresses', count: 23, emoji: '👗' },
    { id: 2, name: 'Tops', count: 18, emoji: '👔' },
    { id: 3, name: 'Bottoms', count: 26, emoji: '👖' },
    { id: 4, name: 'Accessories', count: 32, emoji: '👜' },
  ];

  return NextResponse.json(categories);
}
