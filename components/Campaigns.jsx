'use client';

import styles from './Campaigns.module.css';

export default function Campaigns() {
  const campaigns = [
    {
      id: 1,
      image: '/model-5.png',
      title: 'Empowerment Series',
      description: 'Celebrating confidence'
    },
    {
      id: 2,
      image: '/model-6.png',
      title: 'Heritage Collection',
      description: 'Cultural pride'
    },
    {
      id: 3,
      image: '/model-7.png',
      title: 'Future Forward',
      description: 'Innovation meets style'
    }
  ];

  return (
    <section className={styles.campaigns}>
      <div className={styles.campaignsHeader}>
        <h2>Featured Campaigns</h2>
        <p>Stories of style, culture, and confidence</p>
      </div>

      <div className={styles.campaignsContainer}>
        {campaigns.map(campaign => (
          <div key={campaign.id} className={styles.campaignCard}>
            <div className={styles.campaignImage}>
              <img src={campaign.image} alt={campaign.title} />
            </div>
            <div className={styles.campaignContent}>
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
              <a href="#" className={styles.readMore}>Read Story →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
