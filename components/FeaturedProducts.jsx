'use client';

import { useState, useEffect } from 'react';
import styles from "./FeaturedProducts.module.css";
import { API_ENDPOINTS } from '@/lib/config';

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINTS.PRODUCTS);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.warn('Could not fetch products from API, using fallback data:', err.message);
        setError(err.message);
        // Fallback data
        setProducts([
          { id: 1, name: 'Summer Dress', category: 'Dresses', price: 89.00, salePrice: null, rating: 5, reviews: 42, badge: 'New', emoji: '👗' },
          { id: 2, name: 'Classic Blouse', category: 'Tops', price: 59.00, salePrice: null, rating: 5, reviews: 28, badge: 'New', emoji: '👔' },
          { id: 3, name: 'Skinny Jeans', category: 'Bottoms', price: 39.00, salePrice: 79.00, rating: 4, reviews: 156, badge: 'Sale', emoji: '👖' },
          { id: 4, name: 'Leather Bag', category: 'Accessories', price: 149.00, salePrice: null, rating: 5, reviews: 89, badge: 'New', emoji: '👜' },
          { id: 5, name: 'Maxi Dress', category: 'Dresses', price: 119.00, salePrice: null, rating: 5, reviews: 67, badge: 'New', emoji: '👗' },
          { id: 6, name: 'Crossbody Bag', category: 'Accessories', price: 69.00, salePrice: 129.00, rating: 5, reviews: 120, badge: 'Sale', emoji: '👜' },
          { id: 7, name: 'Linen Shirt', category: 'Tops', price: 74.00, salePrice: null, rating: 4, reviews: 45, badge: 'New', emoji: '👔' },
          { id: 8, name: 'High-Rise Shorts', category: 'Bottoms', price: 54.00, salePrice: null, rating: 5, reviews: 98, badge: 'New', emoji: '👖' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className={styles.featured}>
      <div className={styles.featuredContainer}>
        <div className={styles.featuredHeader}>
          <h2 className={styles.sectionTitle}>New Arrivals</h2>
          <a href="#" className={styles.viewAll}>View All →</a>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px' }}>Loading products...</p>
        ) : (
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImageWrapper}>
                  <div className={styles.productImage}>{product.emoji}</div>
                  <span className={styles.productBadge}>{product.badge}</span>
                  <button className={styles.quickView}>Quick View</button>
                </div>
                <div className={styles.productDetails}>
                  <h3>{product.name}</h3>
                  <p className={styles.productCategory}>{product.category}</p>
                  <div className={styles.productRating}>{renderStars(product.rating)} ({product.reviews})</div>
                  <div className={styles.productPrice}>
                    {product.salePrice ? (
                      <>
                        <span className={styles.salePrice}>${product.salePrice.toFixed(2)}</span>
                        <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className={styles.price}>${product.price.toFixed(2)}</span>
                    )}
                  </div>
                  <button className={styles.addToCart}>Add to Bag</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
