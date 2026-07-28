import { NextResponse } from 'next/server';

export async function GET() {
  const testimonials = [
    { id: 1, rating: 5, text: 'Absolutely love the quality and style. My go-to place for fashion now!', author: 'Jessica M.' },
    { id: 2, rating: 5, text: 'Excellent customer service and fast shipping. Very impressed!', author: 'Sarah L.' },
    { id: 3, rating: 5, text: 'Beautiful designs and great prices. Highly recommend!', author: 'Emily R.' },
  ];

  return NextResponse.json(testimonials);
}
