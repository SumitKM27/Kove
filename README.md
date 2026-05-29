# Kove | Custom Keyboards & Desk Accessories Store

A sleek, premium, and minimal e-commerce storefront designed for workspace creators. The site features custom mechanical keyboards, headphones, walnut monitor stands, and organic merino felt desk mats, styled with a modern minimalist dark theme.

## 🚀 Key Features

- **Direct Add-to-Cart:** Instant product additions from the catalog grid without complex modal steps.
- **Dynamic Category Filtering:** Easily filter gear by category (*Keyboards*, *Audio*, *Desk Gear*, or *All Gear*).
- **Catalog Sorting:** Sort items by *Featured Setup*, *Price: Low to High*, *Price: High to Low*, or *Top Rated*.
- **Real-time Live Search:** Filter items on the fly using the search input in the header.
- **Interactive Sidebar Cart:** Review your workspace bag, increment or decrement quantities, or remove items with real-time subtotal and grand total updates.
- **Single-step Secure Checkout:** Form validation and order placing simulation in a clean modal overlay.
- **Toast Notifications:** Smooth toast alerts for successful cart actions and order confirmation notifications.

## 🛠️ Tech Stack

- **Structure:** Semantic HTML5
- **Styling:** CSS3 (CSS Variables, Flexbox, CSS Grid)
- **Logic:** JavaScript (ES6+, DOM API, LocalStorage persistence)
- **Assets:** Curated high-resolution desk setup and product images

## 📁 Codebase Structure

- [`index.html`](index.html): Defines the web app layout, navigation header, product grid skeleton, slide-out cart drawer, single-step checkout form modal, and multi-column directory footer.
- [`app.js`](app.js): Handles state management (cart items array, filtering, search query), local storage sync, catalog rendering, and simulated checkout flow.
- [`style.css`](style.css): Premium dark theme stylesheet (`#080c14` background, `#111827` card surfaces, and `#8b5cf6` violet accents) with clean typography and responsive design rules.
- [`assets/`](assets/): Contains catalog product images and workspace background setup layouts.

## 💻 How to Run Locally

You can open the website locally using any of the following methods:

### Method 1: Using Node.js (Recommended)
Run the following command in the project directory to launch a local server:
```bash
npx serve
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Method 2: Using Python
If you have Python installed, run:
```bash
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Method 3: Direct Browser Open
Simply double-click [`index.html`](index.html) or drag and drop it into any browser window to run the static page directly.
