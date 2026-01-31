'use client';

import { useState, useEffect, useRef } from 'react';
import styles from "./Navbar.module.css";

export default function Navbar({ heroInView }) {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(() => window.scrollY < 100);
    const lastScrollYRef = useRef(0);

    // Handle scroll event to show/hide navigation
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if at top
            setIsAtTop(currentScrollY < 100);

            if (currentScrollY > lastScrollYRef.current && currentScrollY > 300) {
                // Scrolling down - hide nav
                setIsNavVisible(false);
            } else {
                // Scrolling up - show nav
                setIsNavVisible(true);
            }

            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${!isNavVisible ? styles.navHidden : styles.navVisible} ${!heroInView ? styles.headerSolid : styles.headerTransparent}`}>
            <div className={styles.topBar}>
                <div className={styles.topBarContent}>
                    <span className={styles.topBarText}>Summer Sale - Up to 50% Off</span>
                    <div className={styles.topBarRight}>
                        <a href="#" className={styles.topBarLink}>Track Order</a>
                        <span>|</span>
                        <a href="#" className={styles.topBarLink}>Help</a>
                    </div>
                </div>
            </div>

            <nav className={styles.navbar}>
                <div className={styles.navContent}>
                    <div className={styles.leftNavIcons}>
                        <button className={`${styles.iconBtn} ${heroInView ? styles.iconWhite : styles.iconBlack}`} aria-label="Menu">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <rect x="3" y="5.5" width="18" height=".7" fill={heroInView ? "#ffffff" : "#1a1a1a"}/>
                                <rect x="3" y="11.5" width="18" height=".7" fill={heroInView ? "#ffffff" : "#1a1a1a"}/>
                                <rect x="3" y="17.5" width="18" height=".7" fill={heroInView ? "#ffffff" : "#1a1a1a"}/>
                            </svg>
                        </button>
                        <button className={`${styles.iconBtn} ${heroInView ? styles.iconWhite : styles.iconBlack}`} aria-label="Search">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </button>
                    </div>

                    <div className={styles.logoContainer}>
                        <a href="#" className={`${styles.logo}`}>
                            {heroInView ?
                                <img src="/logo-white.png" alt="logo" className={`${styles.logoImg} ${styles.logoWhite} ${isAtTop && heroInView ? styles.logoLarge : styles.logoNormal}`} />
                                :
                                <img src="/logo-black.png" alt="logo" className={`${styles.logoImg} ${styles.logoBlack}`} />
                            }
                        </a>
                    </div>

                    <div className={styles.rightNavIcons}>
                        <button className={`${styles.iconBtn} ${heroInView ? styles.iconWhite : styles.iconBlack}`} aria-label="Account">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </button>
                        <button className={`${styles.iconBtn} ${heroInView ? styles.iconWhite : styles.iconBlack}`} aria-label="Cart">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
