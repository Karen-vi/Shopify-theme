# 📦 Upsell Section – Shopify Dawn

## Overview

This project implements a custom **Upsell Products section** for the Shopify Dawn theme.

The section dynamically retrieves products from a product metafield and provides a fully interactive **AJAX Quick Add** experience using Shopify's `/cart/add.js` endpoint — without page reload.

---

## 🚀 Features

- Retrieves upsell products from a Product List metafield
- Displays:
  - Product image
  - Title
  - Price
  - "Add to cart" button
- AJAX-based Quick Add functionality
- Loading spinner while processing
- Opens and updates the native Dawn Cart Drawer
- Graceful error handling (e.g., out-of-stock)
- No page reload required

---

## 🧩 Metafield Configuration

The upsell products are defined using a **Product List metafield**:

- **Namespace:** `custom`
- **Key:** `related_upsell`
- **Type:** List of Products

Usage in Liquid:

```liquid
{% assign upsell_products = product.metafields.custom.related_upsell.value %}
```

## 🧪 How to Test

### 1. Create the Metafield

In Shopify Admin:

- **Namespace:** `custom`
- **Key:** `related_upsell`
- **Type:** List of Products

---

### 2. Assign Upsell Products

- Open any product in the Admin.
- Scroll to the metafields section.
- Assign one or more products to `related_upsell`.

---

### 3. Verify Product Conditions

Ensure the upsell products:

- Have available inventory
- Have at least one available variant

---

### 4. Test on Storefront

- Open the product page.
- Scroll to the Upsell section.
- Click **"Add to cart"**.

---

### ✅ Expected Behavior

- Spinner appears
- Product is added via AJAX
- Cart drawer opens automatically
- No page reload occurs



