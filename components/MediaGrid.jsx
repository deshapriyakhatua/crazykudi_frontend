'use client';

import styles from './MediaGrid.module.css';

export default function MediaGrid() {
  const mediaItems = [
    {
      id: 1,
      image: '/model-8.png',
      tag: '#CrazyKudiStyle'
    },
    {
      id: 2,
      image: '/model-9.png',
      tag: '#FeelYourBest'
    },
    {
      id: 3,
      image: '/model-10.png',
      tag: '#CulturedStyle'
    },
    {
      id: 4,
      image: '/model-11.png',
      tag: '#OwnTheStyle'
    },
    {
      id: 5,
      image: '/model-12.png',
      tag: '#ModernFashion'
    },
    {
      id: 6,
      image: '/model-13.png',
      tag: '#ElevateYourStyle'
    }
  ];

  return (
    <section className={styles.mediaGrid}>
      <div className={styles.gridHeader}>
        <h2>@crazykudi on Instagram</h2>
        <p>Join our community and share your CRAZYKUDI moments</p>
      </div>

      <div className={styles.grid}>
        {mediaItems.map(item => (
          <div key={item.id} className={styles.gridItem}>
            <img src={item.image} alt={item.tag} />
            <div className={styles.gridOverlay}>
              <p>{item.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
