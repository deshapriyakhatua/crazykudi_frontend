'use client';

import { useState } from 'react';
import styles from "./page.module.css";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
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
      <Navbar heroInView={heroInView} />
      <Hero onHeroInViewChange={handleHeroInViewChange} />
      <Categories />
      <FeaturedProducts />
      <Benefits />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
