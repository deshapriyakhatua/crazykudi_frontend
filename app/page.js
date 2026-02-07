'use client';

import { useState } from 'react';
import styles from "./page.module.css";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandBanner from '@/components/BrandBanner';
import Lookbook from '@/components/Lookbook';
import Campaigns from '@/components/Campaigns';
import BrandStory from '@/components/BrandStory';
import MediaGrid from '@/components/MediaGrid';
import Categories from '@/components/Categories';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  const [heroInView, setHeroInView] = useState(true);

  const handleHeroInViewChange = (inView) => {
    setHeroInView(inView);
  };


  return (
    <div className={styles.page}>
      <div className={styles.mainBody}>
        <Navbar heroInView={heroInView} />
        <Hero onHeroInViewChange={handleHeroInViewChange} />
        <Lookbook />
        {/* <BrandBanner /> */}
        <Campaigns />
        <BrandStory />
        <MediaGrid />
        <Categories />
        <Benefits />
        <Testimonials />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}
