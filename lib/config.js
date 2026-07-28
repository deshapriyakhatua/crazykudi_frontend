/**
 * CRAZYKUDI Configuration File
 * 
 * Centralized configuration for the entire application.
 * All environment variables and constants are defined here.
 */

// Backend API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_BACKEND_URL || '/api',
  TIMEOUT: 10000, // 10 seconds
};

// API Endpoints
export const API_ENDPOINTS = {
  CATEGORIES: `${API_CONFIG.BASE_URL}/categories`,
  PRODUCTS: `${API_CONFIG.BASE_URL}/products`,
  TESTIMONIALS: `${API_CONFIG.BASE_URL}/testimonials`,
  NEWSLETTER_SUBSCRIBE: `${API_CONFIG.BASE_URL}/newsletter/subscribe`,
  CART_ADD: `${API_CONFIG.BASE_URL}/cart/add`,
  CART_REMOVE: `${API_CONFIG.BASE_URL}/cart/remove`,
};

// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'CRAZYKUDI',
  APP_VERSION: '0.1.0',
  COPYRIGHT_YEAR: 2026,
};

// Feature Flags
export const FEATURES = {
  ENABLE_NEWSLETTER: true,
  ENABLE_QUICK_VIEW: false, // TODO: Implement Quick View modal
  ENABLE_ADD_TO_CART: false, // TODO: Implement Add to Cart functionality
  ENABLE_CART_SIDEBAR: false, // TODO: Implement Cart Sidebar
};

// UI Configuration
export const UI_CONFIG = {
  ITEMS_PER_PAGE: 12,
  LOADING_TIMEOUT: 5000, // 5 seconds before showing error
  ANIMATION_DURATION: 300, // milliseconds
};

// Error Messages
export const ERROR_MESSAGES = {
  FETCH_CATEGORIES_FAILED: 'Failed to load categories. Please try again.',
  FETCH_PRODUCTS_FAILED: 'Failed to load products. Please try again.',
  FETCH_TESTIMONIALS_FAILED: 'Failed to load testimonials. Please try again.',
  NEWSLETTER_SUBSCRIBE_FAILED: 'Failed to subscribe. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  GENERIC_ERROR: 'An error occurred. Please try again later.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  NEWSLETTER_SUBSCRIBED: 'Thank you for subscribing to our newsletter!',
  ITEM_ADDED_TO_CART: 'Item added to cart successfully!',
  CART_UPDATED: 'Cart updated successfully!',
};

// Regular Expressions
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\d\s\-\+\(\)]{10,}$/,
};

// Local Storage Keys
export const STORAGE_KEYS = {
  CART: 'crazykudi_cart',
  USER_PREFERENCES: 'crazykudi_preferences',
  NEWSLETTER_SUBSCRIBED: 'crazykudi_newsletter_subscribed',
};

// Export all configurations as a single object
export const CONFIG = {
  API_CONFIG,
  API_ENDPOINTS,
  APP_CONFIG,
  FEATURES,
  UI_CONFIG,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  REGEX,
  STORAGE_KEYS,
};

export default CONFIG;
