'use client';

import { useState, useEffect } from 'react';
import styles from "./Testimonials.module.css";
import { API_ENDPOINTS } from '@/lib/config';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINTS.TESTIMONIALS);
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError(err.message);
        // Fallback data
        setTestimonials([
          { id: 1, rating: 5, text: 'Absolutely love the quality and style. My go-to place for fashion now!', author: 'Jessica M.' },
          { id: 2, rating: 5, text: 'Excellent customer service and fast shipping. Very impressed!', author: 'Sarah L.' },
          { id: 3, rating: 5, text: 'Beautiful designs and great prices. Highly recommend!', author: 'Emily R.' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialsContainer}>
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px' }}>Loading testimonials...</p>
        ) : (
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.stars}>{renderStars(testimonial.rating)}</div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <p className={styles.testimonialAuthor}>{testimonial.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
