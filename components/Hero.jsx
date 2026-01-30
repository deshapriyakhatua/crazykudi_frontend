'use client';

import { useState, useEffect, useRef } from 'react';
import styles from "./Hero.module.css";

export default function Hero({ onHeroInViewChange }) {
  const heroSectionRef = useRef(null);

  // Track hero section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onHeroInViewChange(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, [onHeroInViewChange]);

  return (
    <section className={styles.hero} ref={heroSectionRef}>
      <div className={styles.heroOverlay}>
        <img src="/hero-image.png" alt="Summer Fashion" className={`${styles.heroImage} ${styles.heroImagePhone}`} />
        <img src="/hero-image.png" alt="Summer Fashion" className={`${styles.heroImage} ${styles.heroImageDesktop}`} />
      </div>
      <div className={styles.heroContentContainer}>
        <div className={styles.heroContentParent}>
          <div className={styles.heroContent}>
            <p className={styles.heroSubtitle}>Discover timeless pieces</p>
            <h1 className={styles.heroTitle}>Summer Essentials</h1>
            <button className={styles.heroButton}>Shop Collection</button>
          </div>
        </div>
      </div>
    </section>
  );
}
