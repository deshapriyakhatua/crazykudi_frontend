'use client';

import { useState } from 'react';
import styles from "./Footer.module.css";

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState({
    shop: false,
    care: false,
    company: false,
    legal: false,
    about: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const ColumnHeader = ({ section, title, isExpanded, onToggle }) => (
    <div className={styles.columnHeader} onClick={() => onToggle(section)}>
      <h4>{title}</h4>
      <span className={`${styles.toggleIcon} ${isExpanded ? styles.expanded : ''}`}>
        ▼
      </span>
    </div>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>

        <div className={styles.footerColumn}>
          <ColumnHeader 
            section="shop" 
            title="Shop" 
            isExpanded={expandedSections.shop}
            onToggle={toggleSection}
          />
          <ul className={`${styles.columnContent} ${expandedSections.shop ? styles.visible : ''}`}>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">All Products</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <ColumnHeader 
            section="care" 
            title="Customer Care" 
            isExpanded={expandedSections.care}
            onToggle={toggleSection}
          />
          <ul className={`${styles.columnContent} ${expandedSections.care ? styles.visible : ''}`}>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <ColumnHeader 
            section="company" 
            title="Company" 
            isExpanded={expandedSections.company}
            onToggle={toggleSection}
          />
          <ul className={`${styles.columnContent} ${expandedSections.company ? styles.visible : ''}`}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <ColumnHeader 
            section="legal" 
            title="Legal" 
            isExpanded={expandedSections.legal}
            onToggle={toggleSection}
          />
          <ul className={`${styles.columnContent} ${expandedSections.legal ? styles.visible : ''}`}>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <ColumnHeader 
            section="about" 
            title="About Us" 
            isExpanded={expandedSections.about}
            onToggle={toggleSection}
          />
          <div className={`${styles.columnContent} ${expandedSections.about ? styles.visible : ''}`}>
            <p>Curated fashion collections for the modern woman. Quality, style, and affordability in every piece.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>

      </div>


      <div className={styles.footerBottom}>
        <img src="/logo-black-footer.png" alt="CRAZYKUDI Logo" />
      </div>
    </footer>
  );
}
