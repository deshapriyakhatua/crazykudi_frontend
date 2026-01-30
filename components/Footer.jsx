'use client';

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h4>CRAZYKUDI</h4>
          <p>Curated fashion collections for the modern woman. Quality, style, and affordability in every piece.</p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h4>Shop</h4>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">All Products</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Customer Care</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2026 CRAZYKUDI. All rights reserved.</p>
        <div className={styles.paymentMethods}>
          <span>We accept: Visa</span>
          <span>Mastercard</span>
          <span>AmEx</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
}
