'use client';

import styles from './Lookbook.module.css';

export default function Lookbook() {
  const lookbookItems = [
    {
      id: 1,
      image: '/model-7.png',
      season: 'Spring Collection',
      title: 'Refreshed Vibes'
    },
    {
      id: 2,
      image: '/model-6.png',
      season: 'Summer Collection',
      title: 'Bold & Bright'
    },
    {
      id: 3,
      image: '/model-12.png',
      season: 'Fall Collection',
      title: 'Warm Tones'
    },
    {
      id: 4,
      image: '/model-10.png',
      season: 'Winter Collection',
      title: 'Elegant Layers'
    }
  ];

  return (
    <section className={styles.lookbook}>
      <div className={styles.lookbookHeader}>
        <h2>Our Lookbook</h2>
        <p>Explore our latest collections through the eyes of our community</p>
      </div>

      <div className={styles.lookbookGrid}>
        {lookbookItems.map(item => (
          <div key={item.id} className={styles.lookbookCard}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} />
              <div className={styles.overlay}>
                <h3>{item.title}</h3>
                <p>{item.season}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
