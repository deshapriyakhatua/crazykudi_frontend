import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, name: 'Summer Dress', category: 'Dresses', price: 89.00, salePrice: null, rating: 5, reviews: 42, badge: 'New', emoji: '👗' },
    { id: 2, name: 'Classic Blouse', category: 'Tops', price: 59.00, salePrice: null, rating: 5, reviews: 28, badge: 'New', emoji: '👔' },
    { id: 3, name: 'Skinny Jeans', category: 'Bottoms', price: 39.00, salePrice: 79.00, rating: 4, reviews: 156, badge: 'Sale', emoji: '👖' },
    { id: 4, name: 'Leather Bag', category: 'Accessories', price: 149.00, salePrice: null, rating: 5, reviews: 89, badge: 'New', emoji: '👜' },
    { id: 5, name: 'Maxi Dress', category: 'Dresses', price: 119.00, salePrice: null, rating: 5, reviews: 67, badge: 'New', emoji: '👗' },
    { id: 6, name: 'Crossbody Bag', category: 'Accessories', price: 69.00, salePrice: 129.00, rating: 5, reviews: 120, badge: 'Sale', emoji: '👜' },
    { id: 7, name: 'Linen Shirt', category: 'Tops', price: 74.00, salePrice: null, rating: 4, reviews: 45, badge: 'New', emoji: '👔' },
    { id: 8, name: 'High-Rise Shorts', category: 'Bottoms', price: 54.00, salePrice: null, rating: 5, reviews: 98, badge: 'New', emoji: '👖' },
  ];

  return NextResponse.json(products);
}
