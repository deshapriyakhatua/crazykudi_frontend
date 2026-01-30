'use client';

import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitItem}>
          <div className={styles.benefitIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6.5L11 13l-2.5-2.5"></path>
            </svg>
          </div>
          <h3>Fast Shipping</h3>
          <p>2-3 business day delivery on orders over $50</p>
        </div>

        <div className={styles.benefitItem}>
          <div className={styles.benefitIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11H7v2h2m0 0h2V9h-2zm2-9h6a2 2 0 012 2v12a2 2 0 01-2 2h-6a2 2 0 01-2-2V4a2 2 0 012-2z"></path>
            </svg>
          </div>
          <h3>Secure Payment</h3>
          <p>All transactions are protected and encrypted</p>
        </div>

        <div className={styles.benefitItem}>
          <div className={styles.benefitIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19H5a2 2 0 01-2-2v-6a2 2 0 012-2h4m0-4h4a2 2 0 012 2v16a2 2 0 01-2 2h-4m0-13v6"></path>
            </svg>
          </div>
          <h3>Easy Returns</h3>
          <p>30-day hassle-free returns on all items</p>
        </div>

        <div className={styles.benefitItem}>
          <div className={styles.benefitIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>
          </div>
          <h3>24/7 Support</h3>
          <p>Friendly customer service always available</p>
        </div>
      </div>
    </section>
  );
}
