'use client';

import { useState, useEffect } from 'react';
import styles from "./Categories.module.css";
import { API_ENDPOINTS } from '@/lib/config';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINTS.CATEGORIES);
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.warn('Could not fetch categories from API, using fallback data:', err.message);
        setError(err.message);
        // Fallback data
        setCategories([
          { id: 1, name: 'Dresses', count: 23, emoji: '👗' },
          { id: 2, name: 'Tops', count: 18, emoji: '👔' },
          { id: 3, name: 'Bottoms', count: 26, emoji: '👖' },
          { id: 4, name: 'Accessories', count: 32, emoji: '👜' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className={styles.categories}>
      <div className={styles.categoriesContainer}>
        <h2 className={styles.sectionTitle}>Shop by Category</h2>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading categories...</p>
        ) : (
          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
              <div key={category.id} className={styles.categoryCard}>
                <div className={styles.categoryImage}>
                  <div className={styles.categoryEmoji}>{category.emoji}</div>
                </div>
                <h3>{category.name}</h3>
                <p>{category.count} Products</p>
                <a href="#" className={styles.categoryLink}>Explore</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
