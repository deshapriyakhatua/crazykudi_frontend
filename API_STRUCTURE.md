# CRAZYKUDI Backend API Structure

This document outlines the API endpoints and data structures expected from the backend server.

## Backend Server URL
Currently hardcoded to: `http://localhost:5000/api`

You can modify this in `app/page.js` by changing the `BACKEND_URL` constant.

---

## API Endpoints

### 1. GET `/categories`
**Purpose:** Fetch all product categories

**Expected Response:**
```json
[
  {
    "id": 1,
    "name": "Dresses",
    "count": 23,
    "emoji": "👗"
  },
  {
    "id": 2,
    "name": "Tops",
    "count": 18,
    "emoji": "👔"
  },
  {
    "id": 3,
    "name": "Bottoms",
    "count": 26,
    "emoji": "👖"
  },
  {
    "id": 4,
    "name": "Accessories",
    "count": 32,
    "emoji": "👜"
  }
]
```

---

### 2. GET `/products`
**Purpose:** Fetch all products for the New Arrivals section

**Expected Response:**
```json
[
  {
    "id": 1,
    "name": "Summer Dress",
    "category": "Dresses",
    "price": 89.00,
    "salePrice": null,
    "rating": 5,
    "reviews": 42,
    "badge": "New",
    "emoji": "👗"
  },
  {
    "id": 2,
    "name": "Classic Blouse",
    "category": "Tops",
    "price": 59.00,
    "salePrice": null,
    "rating": 5,
    "reviews": 28,
    "badge": "New",
    "emoji": "👔"
  },
  {
    "id": 3,
    "name": "Skinny Jeans",
    "category": "Bottoms",
    "price": 39.00,
    "salePrice": 79.00,
    "rating": 4,
    "reviews": 156,
    "badge": "Sale",
    "emoji": "👖"
  }
]
```

**Field Descriptions:**
- `id`: Unique product identifier
- `name`: Product name
- `category`: Product category
- `price`: Regular price (or sale price if `salePrice` is null)
- `salePrice`: Sale price (if on sale, otherwise null)
- `rating`: Star rating (1-5)
- `reviews`: Number of reviews
- `badge`: Product badge ("New" or "Sale")
- `emoji`: Emoji representation (can be replaced with image URLs)

---

### 3. GET `/testimonials`
**Purpose:** Fetch customer testimonials/reviews

**Expected Response:**
```json
[
  {
    "id": 1,
    "rating": 5,
    "text": "Absolutely love the quality and style. My go-to place for fashion now!",
    "author": "Jessica M."
  },
  {
    "id": 2,
    "rating": 5,
    "text": "Excellent customer service and fast shipping. Very impressed!",
    "author": "Sarah L."
  },
  {
    "id": 3,
    "rating": 5,
    "text": "Beautiful designs and great prices. Highly recommend!",
    "author": "Emily R."
  }
]
```

**Field Descriptions:**
- `id`: Unique testimonial identifier
- `rating`: Star rating (1-5)
- `text`: Customer review text
- `author`: Customer name

---

## Fallback Data

If any API endpoint fails to respond, the frontend automatically displays fallback data. This allows the page to remain functional during backend development.

### Fallback Behavior:
- Loading states are displayed while fetching
- If fetch fails, fallback data is used
- Errors are logged to browser console
- Error messages are stored in state for potential error handling UI

---

## Future Enhancements

### Newsletter Subscription
Currently handles form submission client-side. To integrate with backend:

1. Add endpoint: `POST /newsletter/subscribe`
2. Update the `handleNewsletterSubmit` function in `app/page.js`

**Expected Request:**
```json
{
  "email": "user@example.com"
}
```

### Quick View Button
Currently non-functional. To implement:

1. Add state for modal/drawer
2. Create endpoint: `GET /products/:id`
3. Display product details in modal

### Add to Cart Button
Currently non-functional. To implement:

1. Add cart context/state management
2. Create endpoint: `POST /cart/add`
3. Update cart state

---

## Environment Variables

Consider using environment variables instead of hardcoding the backend URL:

```javascript
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000/api';
```

Create `.env.local` file:
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/api
```

---

## Error Handling

The frontend handles errors gracefully:
- Network errors → Fallback data displayed
- 404/500 errors → Fallback data displayed
- Errors logged to console for debugging

To add custom error handling UI, modify the error state in `app/page.js`.

---

## CORS Configuration

If backend is on a different domain, ensure CORS headers are configured:

```
Access-Control-Allow-Origin: http://localhost:3001
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```
