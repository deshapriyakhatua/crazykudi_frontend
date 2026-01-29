'use client';

import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { API_ENDPOINTS, ERROR_MESSAGES, SUCCESS_MESSAGES, FEATURES } from '@/lib/config';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  const [errors, setErrors] = useState({});

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const response = await fetch(API_ENDPOINTS.CATEGORIES);
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setErrors(prev => ({ ...prev, categories: error.message }));
        // Fallback data
        setCategories([
          { id: 1, name: 'Dresses', count: 23, emoji: '👗' },
          { id: 2, name: 'Tops', count: 18, emoji: '👔' },
          { id: 3, name: 'Bottoms', count: 26, emoji: '👖' },
          { id: 4, name: 'Accessories', count: 32, emoji: '👜' },
        ]);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoadingProducts(true);
        const response = await fetch(API_ENDPOINTS.PRODUCTS);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setErrors(prev => ({ ...prev, products: error.message }));
        // Fallback data
        setProducts([
          { id: 1, name: 'Summer Dress', category: 'Dresses', price: 89.00, salePrice: null, rating: 5, reviews: 42, badge: 'New', emoji: '👗' },
          { id: 2, name: 'Classic Blouse', category: 'Tops', price: 59.00, salePrice: null, rating: 5, reviews: 28, badge: 'New', emoji: '👔' },
          { id: 3, name: 'Skinny Jeans', category: 'Bottoms', price: 39.00, salePrice: 79.00, rating: 4, reviews: 156, badge: 'Sale', emoji: '👖' },
          { id: 4, name: 'Leather Bag', category: 'Accessories', price: 149.00, salePrice: null, rating: 5, reviews: 89, badge: 'New', emoji: '👜' },
          { id: 5, name: 'Maxi Dress', category: 'Dresses', price: 119.00, salePrice: null, rating: 5, reviews: 67, badge: 'New', emoji: '👗' },
          { id: 6, name: 'Crossbody Bag', category: 'Accessories', price: 69.00, salePrice: 129.00, rating: 5, reviews: 120, badge: 'Sale', emoji: '👜' },
          { id: 7, name: 'Linen Shirt', category: 'Tops', price: 74.00, salePrice: null, rating: 4, reviews: 45, badge: 'New', emoji: '👔' },
          { id: 8, name: 'High-Rise Shorts', category: 'Bottoms', price: 54.00, salePrice: null, rating: 5, reviews: 98, badge: 'New', emoji: '👖' },
        ]);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoadingTestimonials(true);
        const response = await fetch(API_ENDPOINTS.TESTIMONIALS);
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setErrors(prev => ({ ...prev, testimonials: error.message }));
        // Fallback data
        setTestimonials([
          { id: 1, rating: 5, text: 'Absolutely love the quality and style. My go-to place for fashion now!', author: 'Jessica M.' },
          { id: 2, rating: 5, text: 'Excellent customer service and fast shipping. Very impressed!', author: 'Sarah L.' },
          { id: 3, rating: 5, text: 'Beautiful designs and great prices. Highly recommend!', author: 'Emily R.' },
        ]);
      } finally {
        setLoadingTestimonials(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    console.log('Newsletter signup:', email);

    // TODO: Send to backend at API_ENDPOINTS.NEWSLETTER_SUBSCRIBE
    // Show success message: SUCCESS_MESSAGES.NEWSLETTER_SUBSCRIBED

    e.target.reset();
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
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
            <a href="#" className={styles.logo}>CRAZYKUDI</a>

            <div className={styles.navLinks}>
              <a href="#shop">Shop</a>
              <a href="#new">New</a>
              <a href="#sale">Sale</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

            <div className={styles.navIcons}>
              <button className={styles.iconBtn} aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
              <button className={styles.iconBtn} aria-label="Account">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              <button className={styles.iconBtn} aria-label="Cart">
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

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <img src="/hero-image.png" alt="Summer Fashion" className={`${styles.heroImage} ${styles.heroImagePhone}`} />
          <img src="/hero-image.png" alt="Summer Fashion" className={`${styles.heroImage} ${styles.heroImageDesktop}`} />
        </div>
        <div className={styles.heroContentContainer}>
          <div className={styles.heroContentParent}>
            <div className={styles.heroContent}>
              <p className={styles.heroSubtitle}>Discover timeless pieces</p>
              <h1 className={styles.heroTitle}>Summer Essentials</h1>
              <button className={styles.heroButton}>Shop Collection</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className={styles.categories}>
        <div className={styles.categoriesContainer}>
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          {loadingCategories ? (
            <p style={{ textAlign: 'center' }}>Loading categories...</p>
          ) : (
            <div className={styles.categoriesGrid}>
              {categories.map((category) => (
                <div key={category.id} className={styles.categoryCard}>
                  <div className={styles.categoryImage}>
                    <div className={styles.categoryEmoji}>{category.emoji}</div>
                  </div>
                  <h3>{category.name}</h3>
                  <p>{category.count} Products</p>
                  <a href="#" className={styles.categoryLink}>Explore</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featured}>
        <div className={styles.featuredContainer}>
          <div className={styles.featuredHeader}>
            <h2 className={styles.sectionTitle}>New Arrivals</h2>
            <a href="#" className={styles.viewAll}>View All →</a>
          </div>

          {loadingProducts ? (
            <p style={{ textAlign: 'center', padding: '40px' }}>Loading products...</p>
          ) : (
            <div className={styles.productsGrid}>
              {products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImageWrapper}>
                    <div className={styles.productImage}>{product.emoji}</div>
                    <span className={styles.productBadge}>{product.badge}</span>
                    <button className={styles.quickView}>Quick View</button>
                  </div>
                  <div className={styles.productDetails}>
                    <h3>{product.name}</h3>
                    <p className={styles.productCategory}>{product.category}</p>
                    <div className={styles.productRating}>{renderStars(product.rating)} ({product.reviews})</div>
                    <div className={styles.productPrice}>
                      {product.salePrice ? (
                        <>
                          <span className={styles.salePrice}>${product.salePrice.toFixed(2)}</span>
                          <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className={styles.price}>${product.price.toFixed(2)}</span>
                      )}
                    </div>
                    <button className={styles.addToCart}>Add to Bag</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6.5L11 13l-2.5-2.5"></path>
              </svg>
            </div>
            <h3>Fast Shipping</h3>
            <p>2-3 business day delivery on orders over $50</p>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11H7v2h2m0 0h2V9h-2zm2-9h6a2 2 0 012 2v12a2 2 0 01-2 2h-6a2 2 0 01-2-2V4a2 2 0 012-2z"></path>
              </svg>
            </div>
            <h3>Secure Payment</h3>
            <p>All transactions are protected and encrypted</p>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19H5a2 2 0 01-2-2v-6a2 2 0 012-2h4m0-4h4a2 2 0 012 2v16a2 2 0 01-2 2h-4m0-13v6"></path>
              </svg>
            </div>
            <h3>Easy Returns</h3>
            <p>30-day hassle-free returns on all items</p>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
              </svg>
            </div>
            <h3>24/7 Support</h3>
            <p>Friendly customer service always available</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsContainer}>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          {loadingTestimonials ? (
            <p style={{ textAlign: 'center', padding: '40px' }}>Loading testimonials...</p>
          ) : (
            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.testimonialCard}>
                  <div className={styles.stars}>{renderStars(testimonial.rating)}</div>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <p className={styles.testimonialAuthor}>{testimonial.author}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
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

      {/* Footer */}
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
    </div>
  );
}
