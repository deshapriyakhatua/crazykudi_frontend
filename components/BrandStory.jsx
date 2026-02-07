'use client';

import styles from './BrandStory.module.css';

export default function BrandStory() {
  return (
    <section className={styles.brandStory}>
      <div className={styles.storyContainer}>
        <div className={styles.imageSection}>
          <img 
            src="/model-14.png" 
            alt="Brand founder" 
            className={styles.storyImage}
          />
        </div>
        
        <div className={styles.contentSection}>
          <h2>Our Story</h2>
          <p className={styles.tagline}>Redefining Fashion, Building Culture</p>
          <p className={styles.description}>
            CRAZYKUDI was born from a vision to create fashion that celebrates individuality and cultural identity. 
            We believe that every piece tells a story, and every woman deserves to feel empowered and beautiful.
          </p>
          <p className={styles.description}>
            Our curated collections blend quality craftsmanship with modern styles, creating pieces that 
            transcend trends and become part of your personal narrative.
          </p>
          <div className={styles.values}>
            <div className={styles.valueItem}>
              <h4>Authentic</h4>
              <p>Genuine styles for genuine you</p>
            </div>
            <div className={styles.valueItem}>
              <h4>Sustainable</h4>
              <p>Ethically sourced and produced</p>
            </div>
            <div className={styles.valueItem}>
              <h4>Inclusive</h4>
              <p>Fashion for every body, every mind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
