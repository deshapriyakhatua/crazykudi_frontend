'use client';

import styles from './BrandBanner.module.css';

export default function BrandBanner() {
  return (
    <section className={styles.brandBanner}>
      <div className={styles.bannerContent}>
        <img 
          src="/model-1.png" 
          alt="Brand Banner"
          className={styles.bannerImage}
        />
        <div className={styles.bannerText}>
          <h2>Celebrate Your Uniqueness</h2>
          <p>Express yourself with CRAZYKUDI</p>
          <button className={styles.cta}>Explore</button>
        </div>
      </div>
    </section>
  );
}
