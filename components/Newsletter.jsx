'use client';

import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    console.log('Newsletter signup:', email);

    // TODO: Send to backend at API_ENDPOINTS.NEWSLETTER_SUBSCRIBE
    // Show success message: SUCCESS_MESSAGES.NEWSLETTER_SUBSCRIBED

    e.target.reset();
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <h2>Join Our Newsletter</h2>
        <p>Subscribe to get special offers and updates delivered to your inbox</p>
        <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
          <input type="email" placeholder="Enter your email address..." required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
