// --- PRODUCTS DATABASE ---
const PRODUCTS = [
  {
    id: 'kb-aura-75',
    title: 'Kove K75 Custom Keyboard',
    category: 'Keyboards',
    price: 12999.00,
    image: 'assets/keyboard.png',
    rating: 4.8,
    reviews: 142,
    badge: 'new',
    badgeText: 'New',
    description: 'A premium 75% mechanical keyboard designed for typists who care about acoustic resonance. Built with a heavy CNC anodized aluminum shell, pre-lubricated Kove Linear switches, and custom Cherry profile Taro keycaps. Sounds like gentle rain.',
    specs: {
      'Plate Mount': 'Gasket-Mounted Polycarbonate',
      'Switches': 'Kove Creamy Linear (Factory Lubed)',
      'Keycaps': 'Double-shot PBT Taro theme',
      'Sound profile': 'Deep marble-like thock'
    },
    colors: [
      { name: 'Carbon Black', value: '#1e293b' },
      { name: 'Chalk White', value: '#f1f5f9' },
      { name: 'Sunset Orange', value: '#f97316' }
    ]
  },
  {
    id: 'hp-aura-studio',
    title: 'Kove H1 Over-Ear Headphones',
    category: 'Audio',
    price: 19999.00,
    image: 'assets/headphones.png',
    rating: 4.9,
    reviews: 98,
    badge: 'hot',
    badgeText: 'Hot',
    description: 'Audiophile headphones crafted with hand-trimmed sheepskin cushions and an open-back wooden acoustic chamber. Tuned for a wide, natural soundstage that lets you hear the organic placement of instruments.',
    specs: {
      'Drivers': '42mm Organic Bio-Cellulose',
      'Acoustics': 'Open-Back Studio Grade',
      'Padding': 'Memory Foam & Sheepskin',
      'Cable': 'Braid-shielded Copper'
    },
    colors: [
      { name: 'Matte Black', value: '#0f172a' },
      { name: 'Arctic Grey', value: '#94a3b8' }
    ]
  },
  {
    id: 'ms-aura-ergo',
    title: 'Kove M1 Wireless Ergo Mouse',
    category: 'Desk Gear',
    price: 8499.00,
    image: 'assets/mouse.png',
    rating: 4.6,
    reviews: 76,
    badge: null,
    badgeText: '',
    description: 'An ultra-lightweight 68g ergonomic mouse designed to rest naturally in your palm. Finished with a fine, chalk-matte powder coating that prevents sweat buildup during long sessions.',
    specs: {
      'Weight': '68g Ultra-Lightweight',
      'Sensor': 'Pixart 3395 (26,000 DPI)',
      'Switches': 'Huano Blue Shell Pink Dot',
      'Battery Life': 'Up to 120 Hours'
    },
    colors: [
      { name: 'Shadow Black', value: '#1e293b' },
      { name: 'Pure White', value: '#ffffff' }
    ]
  },
  {
    id: 'lb-aura-monitor',
    title: 'Kove Monitor Beam Lightbar',
    category: 'Desk Gear',
    price: 5999.00,
    image: 'assets/lightbar.png',
    rating: 4.7,
    reviews: 215,
    badge: null,
    badgeText: '',
    description: 'An asymmetrical monitor lamp that casts clean light straight down onto your work path. Zero screen glare, zero eye strain. Includes a rear warm-glow ambient light to reduce contrast fatigue.',
    specs: {
      'Optical Path': 'Asymmetric (Screen Glare Free)',
      'Rear LED': 'Warm Ambient Backlight',
      'Controls': 'Solid Brass Touch Dial',
      'Temperature': '2700K - 6500K Stepless'
    },
    colors: [
      { name: 'Anodized Black', value: '#0f172a' },
      { name: 'Liquid Silver', value: '#cbd5e1' }
    ]
  },
  {
    id: 'kb-aura-pro',
    title: 'Kove Walnut-Brass TKL Keyboard Pro',
    category: 'Keyboards',
    price: 18499.00,
    image: 'assets/keyboard_pro.png',
    rating: 4.9,
    reviews: 64,
    badge: 'hot',
    badgeText: 'Pro Edition',
    description: 'Our flagship mechanical keyboard. Housed in a solid, CNC-routed American walnut wooden shell with an integrated solid brass internal weight. Delivers a uniquely deep, resonant wood acoustic typing profile.',
    specs: {
      'Shell': 'Solid American Walnut Wood',
      'Weight Plate': 'Internal Polished Brass',
      'Switches': 'Kove Silent Tactile (Pre-lubed)',
      'Layout': 'Tenkeyless (TKL)'
    },
    colors: [
      { name: 'Carbon Black', value: '#1e293b' }
    ]
  },
  {
    id: 'hp-aura-buds',
    title: 'Kove Buds Pro',
    category: 'Audio',
    price: 9999.00,
    image: 'assets/earbuds.png',
    rating: 4.5,
    reviews: 82,
    badge: 'new',
    badgeText: 'Waterproof',
    description: 'Compact true-wireless earbuds that fit snugly inside the ear canal. Tuned with warm sub-bass and crisp highs for desktop listening, exercising, or traveling.',
    specs: {
      'ANC': 'Intelligent Hybrid Active Noise Cancel',
      'Waterproofing': 'IPX6 Sweatproof',
      'Case Material': 'Soft-touch Anodized Case',
      'Playtime': '7 Hours (28 Hours with Case)'
    },
    colors: [
      { name: 'Matte Black', value: '#0f172a' },
      { name: 'Pure White', value: '#ffffff' }
    ]
  },
  {
    id: 'dp-aura-merino',
    title: 'Kove Merino Wool Desk Mat',
    category: 'Desk Gear',
    price: 3499.00,
    image: 'assets/desk_pad.png',
    rating: 4.8,
    reviews: 31,
    badge: 'new',
    badgeText: 'Felt Wool',
    description: 'Thick 4mm desk pad constructed from premium organic merino wool felt. Provides warm desktop padding for your wrists and a tactile, non-reflective backdrop for your gear.',
    specs: {
      'Material': '100% Organic Merino Felt Felt',
      'Edge finish': 'Double-stitched Border',
      'Cushion': '4mm High-density Felt',
      'Grip': 'Honeycomb Anti-slip Rubber'
    },
    colors: [
      { name: 'Slate Grey', value: '#475569' }
    ]
  },
  {
    id: 'st-aura-monitor',
    title: 'Kove Dual-Level Walnut Monitor Riser',
    category: 'Desk Gear',
    price: 9999.00,
    image: 'assets/monitor_stand.png',
    rating: 4.9,
    reviews: 45,
    badge: null,
    badgeText: '',
    description: 'Hand-assembled walnut monitor shelf that elevates your displays for a comfortable neck posture. Features a bottom slot for keyboard storage, maintaining a clean workspace.',
    specs: {
      'Structure': 'Molded Plywood Walnut Veneer',
      'Legs': 'Powder Coated Aluminum',
      'Storage': 'Under-shelf Keyboard Slot',
      'Capacity': 'Supports up to 25 kg'
    },
    colors: [
      { name: 'Natural Walnut', value: '#78350f' }
    ]
  }
];

// --- APP STATE ---
let state = {
  cart: [],
  theme: 'dark', // 'dark' or 'light'
  filterCategory: 'All',
  searchQuery: '',
  sortBy: 'featured', // 'featured', 'price-low', 'price-high', 'rating'
  appliedPromo: null, // { code: string, discountPercent: number }
  checkoutStep: 1
};

// --- PROMO CODES ---
const PROMO_CODES = {
  'KOVE10': 10,
  'WELCOME20': 20
};

// --- DOM ELEMENTS ---
const elements = {
  body: document.body,
  themeToggleBtn: document.getElementById('theme-toggle'),
  themeIcon: document.getElementById('theme-icon'),
  cartToggleBtn: document.getElementById('cart-toggle'),
  cartBadge: document.getElementById('cart-badge'),
  cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
  cartDrawer: document.getElementById('cart-drawer'),
  cartCloseBtn: document.getElementById('cart-close'),
  cartItemsContainer: document.getElementById('cart-items'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartDiscount: document.getElementById('cart-discount'),
  cartDiscountRow: document.getElementById('cart-discount-row'),
  cartTotal: document.getElementById('cart-total'),
  promoInput: document.getElementById('promo-input'),
  promoApplyBtn: document.getElementById('promo-apply'),
  promoActiveContainer: document.getElementById('promo-active-container'),
  promoActiveText: document.getElementById('promo-active-text'),
  promoRemoveBtn: document.getElementById('promo-remove'),
  checkoutBtn: document.getElementById('checkout-btn'),
  
  // Product list
  productsGrid: document.getElementById('products-grid'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  sortSelect: document.getElementById('sort-select'),
  searchInput: document.getElementById('search-input'),
  mobileSearchInput: document.getElementById('mobile-search-input'),

  // Product detail modal
  productDetailModal: document.getElementById('product-detail-modal'),
  detailCloseBtn: document.getElementById('detail-close'),
  detailImg: document.getElementById('detail-img'),
  detailCat: document.getElementById('detail-category'),
  detailTitle: document.getElementById('detail-title'),
  detailPrice: document.getElementById('detail-price'),
  detailDesc: document.getElementById('detail-description'),
  detailSpecs: document.getElementById('detail-specs'),
  detailColors: document.getElementById('detail-colors'),
  detailQtyMinus: document.getElementById('detail-qty-minus'),
  detailQtyPlus: document.getElementById('detail-qty-plus'),
  detailQtyVal: document.getElementById('detail-qty-val'),
  detailAddToCartBtn: document.getElementById('detail-add-to-cart'),

  // Checkout modal
  checkoutModal: document.getElementById('checkout-modal'),
  checkoutCloseBtn: document.getElementById('checkout-close'),
  checkoutStep1: document.getElementById('checkout-step-1'),
  checkoutStep2: document.getElementById('checkout-step-2'),
  checkoutStep3: document.getElementById('checkout-step-3'),
  step1Next: document.getElementById('step-1-next'),
  step2Prev: document.getElementById('step-2-prev'),
  step2Next: document.getElementById('step-2-next'),
  step3Close: document.getElementById('step-3-close'),
  stepNode1: document.getElementById('step-node-1'),
  stepNode2: document.getElementById('step-node-2'),
  stepNode3: document.getElementById('step-node-3'),
  checkoutSummaryItems: document.getElementById('checkout-summary-items'),
  checkoutSummaryTotal: document.getElementById('checkout-summary-total'),

  // Toast container
  toastContainer: document.getElementById('toast-container')
};

// --- INITIALIZE APP ---
document.addEventListener('DOMContentLoaded', () => {
  loadLocalStorage();
  initTheme();
  renderProducts();
  renderCart();
  
  // Create search dropdown element
  const searchContainer = document.querySelector('.search-container');
  if (searchContainer) {
    const dropdown = document.createElement('div');
    dropdown.className = 'search-dropdown glass';
    dropdown.id = 'search-dropdown';
    searchContainer.appendChild(dropdown);
  }
  
  setupEventListeners();
  
  // Header scroll class
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

// --- STATE PERSISTENCE ---
function loadLocalStorage() {
  const savedCart = localStorage.getItem('aura_cart');
  if (savedCart) {
    state.cart = JSON.parse(savedCart);
  }
  
  const savedTheme = localStorage.getItem('aura_theme');
  if (savedTheme) {
    state.theme = savedTheme;
  }
  
  const savedPromo = localStorage.getItem('aura_promo');
  if (savedPromo) {
    state.appliedPromo = JSON.parse(savedPromo);
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem('aura_cart', JSON.stringify(state.cart));
}

function saveThemeToLocalStorage() {
  localStorage.setItem('aura_theme', state.theme);
}

function savePromoToLocalStorage() {
  if (state.appliedPromo) {
    localStorage.setItem('aura_promo', JSON.stringify(state.appliedPromo));
  } else {
    localStorage.removeItem('aura_promo');
  }
}

// --- THEME ---
function initTheme() {
  if (state.theme === 'light') {
    elements.body.classList.add('light-theme');
    elements.themeIcon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
  } else {
    elements.body.classList.remove('light-theme');
    elements.themeIcon.innerHTML = `<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
}

function toggleTheme() {
  if (state.theme === 'dark') {
    state.theme = 'light';
  } else {
    state.theme = 'dark';
  }
  initTheme();
  saveThemeToLocalStorage();
  showToast(`Switched to ${state.theme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type} glass`;
  toast.style.setProperty('--delay', '4s');
  
  // Icon based on type
  let iconMarkup = '';
  switch(type) {
    case 'success':
      iconMarkup = `<svg class="icon-svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`;
      break;
    case 'error':
      iconMarkup = `<svg class="icon-svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>`;
      break;
    case 'warning':
      iconMarkup = `<svg class="icon-svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>`;
      break;
    case 'info':
    default:
      iconMarkup = `<svg class="icon-svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`;
      break;
  }

  toast.innerHTML = `${iconMarkup}<span>${message}</span>`;
  elements.toastContainer.appendChild(toast);
  
  // Remove element after animation completes
  setTimeout(() => {
    toast.remove();
  }, 4300);
}

// --- RENDER PRODUCTS GRID ---
function renderProducts() {
  // 1. Filter products
  let filtered = PRODUCTS.filter(prod => {
    const matchesCategory = state.filterCategory === 'All' || prod.category === state.filterCategory;
    const matchesSearch = prod.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          prod.category.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 2. Sort products
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // 3. Render
  elements.productsGrid.innerHTML = '';
  
  if (filtered.length === 0) {
    elements.productsGrid.innerHTML = `
      <div class="no-results glass">
        <div class="no-results-icon">🔍</div>
        <h3 class="hero-title" style="font-size: 24px; margin-bottom: 8px;">No accessories found</h3>
        <p class="no-results-text">Try adjusting your filter keyword or category search.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card glass';
    card.dataset.id = product.id;
    
    // Star rating rendering
    let starsHtml = '';
    const roundedRating = Math.round(product.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        starsHtml += '★';
      } else {
        starsHtml += '☆';
      }
    }

    const badgeHtml = product.badge 
      ? `<span class="product-badge badge badge-${product.badge}">${product.badgeText}</span>` 
      : '';

    card.innerHTML = `
      <div class="product-img-wrapper">
        ${badgeHtml}
        <img class="product-img" src="${product.image}" alt="${product.title}" loading="lazy">
      </div>
      <div class="product-card-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.title}</h3>
        <div class="rating-container">
          <div class="stars">${starsHtml}</div>
          <span class="rating-val">${product.rating} (${product.reviews})</span>
        </div>
        <div class="product-footer">
          <span class="price-tag">₹${product.price.toLocaleString('en-IN')}</span>
          <button class="btn btn-icon quick-add-btn" aria-label="Quick Add to Cart">
            <svg class="icon-svg" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 100-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>
          </button>
        </div>
      </div>
    `;

    // Wire up events
    card.querySelector('.product-title').addEventListener('click', () => openDetailModal(product.id));
    card.querySelector('.product-img-wrapper').addEventListener('click', () => openDetailModal(product.id));
    card.querySelector('.quick-add-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(product.id, product.colors[0].name, 1);
    });

    elements.productsGrid.appendChild(card);
  });
}

// --- CART MANAGEMENT ---
function renderCart() {
  elements.cartItemsContainer.innerHTML = '';
  
  if (state.cart.length === 0) {
    elements.cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛒</div>
        <p class="cart-empty-text">Your workspace bag is empty</p>
        <button class="btn btn-outline" id="cart-continue-shopping">Browse Gear</button>
      </div>
    `;
    
    // Add shopping listener to empty state btn
    const browseBtn = document.getElementById('cart-continue-shopping');
    if (browseBtn) {
      browseBtn.addEventListener('click', toggleCartDrawer);
    }
    
    elements.cartBadge.classList.remove('bounce');
    elements.cartBadge.style.display = 'none';
    elements.checkoutBtn.disabled = true;
  } else {
    elements.checkoutBtn.disabled = false;
    
    // Calculate total items
    const totalQty = state.cart.reduce((acc, curr) => acc + curr.quantity, 0);
    elements.cartBadge.textContent = totalQty;
    elements.cartBadge.style.display = 'flex';
    
    state.cart.forEach((item, index) => {
      const cartItemEl = document.createElement('div');
      cartItemEl.className = 'cart-item';
      
      cartItemEl.innerHTML = `
        <img class="cart-item-img" src="${item.product.image}" alt="${item.product.title}">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.product.title}</h4>
          <p class="cart-item-color">Color: ${item.color}</p>
          <div class="cart-item-footer">
            <span class="cart-item-price">₹${(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
            <div class="cart-item-qty">
              <button class="cart-item-qty-btn qty-minus" data-index="${index}">-</button>
              <span class="cart-item-qty-val">${item.quantity}</span>
              <button class="cart-item-qty-btn qty-plus" data-index="${index}">+</button>
            </div>
          </div>
        </div>
        <button class="cart-item-remove" data-index="${index}" aria-label="Remove Item">
          <svg class="icon-svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
        </button>
      `;

      // Handlers
      cartItemEl.querySelector('.qty-minus').addEventListener('click', (e) => adjustCartQty(index, -1));
      cartItemEl.querySelector('.qty-plus').addEventListener('click', (e) => adjustCartQty(index, 1));
      cartItemEl.querySelector('.cart-item-remove').addEventListener('click', (e) => removeFromCart(index));

      elements.cartItemsContainer.appendChild(cartItemEl);
    });
  }

  calculateTotals();
  renderPromoUI();
}

function calculateTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  let discount = 0;
  
  if (state.appliedPromo) {
    discount = subtotal * (state.appliedPromo.discountPercent / 100);
    elements.cartDiscountRow.style.display = 'flex';
    elements.cartDiscount.textContent = `-₹${discount.toLocaleString('en-IN')}`;
  } else {
    elements.cartDiscountRow.style.display = 'none';
  }
  
  const grandTotal = Math.max(0, subtotal - discount);
  
  elements.cartSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  elements.cartTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

function renderPromoUI() {
  if (state.appliedPromo) {
    elements.promoInput.style.display = 'none';
    elements.promoApplyBtn.style.display = 'none';
    elements.promoActiveContainer.style.display = 'flex';
    elements.promoActiveText.textContent = `${state.appliedPromo.code} Applied (${state.appliedPromo.discountPercent}% OFF)`;
  } else {
    elements.promoInput.style.display = 'block';
    elements.promoInput.value = '';
    elements.promoApplyBtn.style.display = 'block';
    elements.promoActiveContainer.style.display = 'none';
  }
}

function addToCart(productId, colorName, qty = 1, priceOverride = null, nameOverride = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Clone product to support bundle price overrides
  let cartProduct = { ...product };
  if (priceOverride !== null) {
    cartProduct.price = priceOverride;
  }
  if (nameOverride !== null) {
    cartProduct.title = nameOverride;
  }

  // Check if item with this ID, color, AND price already in cart
  const existingIdx = state.cart.findIndex(item => 
    item.product.id === productId && 
    item.color === colorName && 
    item.product.price === cartProduct.price
  );

  if (existingIdx > -1) {
    state.cart[existingIdx].quantity += qty;
  } else {
    state.cart.push({
      product: cartProduct,
      color: colorName,
      quantity: qty
    });
  }

  saveCartToLocalStorage();
  renderCart();
  
  // Bounce badge animation
  elements.cartBadge.classList.add('bounce');
  setTimeout(() => {
    elements.cartBadge.classList.remove('bounce');
  }, 300);

  showToast(`Added ${qty}x ${cartProduct.title} (${colorName}) to cart!`, 'success');
}

function adjustCartQty(index, delta) {
  state.cart[index].quantity += delta;
  
  if (state.cart[index].quantity <= 0) {
    removeFromCart(index);
  } else {
    saveCartToLocalStorage();
    renderCart();
  }
}

function removeFromCart(index) {
  const removedItem = state.cart[index];
  state.cart.splice(index, 1);
  saveCartToLocalStorage();
  renderCart();
  showToast(`Removed ${removedItem.product.title} from cart.`, 'warning');
}

function applyPromoCode() {
  const code = elements.promoInput.value.trim().toUpperCase();
  
  if (!code) {
    showToast('Please enter a coupon code', 'error');
    return;
  }

  if (PROMO_CODES[code]) {
    state.appliedPromo = {
      code: code,
      discountPercent: PROMO_CODES[code]
    };
    savePromoToLocalStorage();
    renderCart();
    showToast(`Promo code ${code} applied successfully!`, 'success');
  } else {
    showToast('Invalid promo code. Try "KOVE10" or "WELCOME20"', 'error');
  }
}

function removePromoCode() {
  const removed = state.appliedPromo;
  state.appliedPromo = null;
  savePromoToLocalStorage();
  renderCart();
  if (removed) {
    showToast(`Removed discount code ${removed.code}`, 'info');
  }
}

// --- PRODUCT DETAILS MODAL ---
let activeDetailProductId = null;
let selectedDetailColor = '';
let detailQty = 1;

function openDetailModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeDetailProductId = productId;
  detailQty = 1;
  elements.detailQtyVal.textContent = detailQty;
  
  // Inject details
  elements.detailImg.src = product.image;
  elements.detailImg.alt = product.title;
  elements.detailCat.textContent = product.category;
  elements.detailTitle.textContent = product.title;
  elements.detailPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;
  elements.detailDesc.textContent = product.description;

  // Specs rendering
  elements.detailSpecs.innerHTML = '';
  for (const [key, value] of Object.entries(product.specs)) {
    const item = document.createElement('div');
    item.className = 'details-spec-item';
    item.innerHTML = `
      <span class="details-spec-label">${key}</span>
      <span class="details-spec-val">${value}</span>
    `;
    elements.detailSpecs.appendChild(item);
  }

  // Color rendering
  elements.detailColors.innerHTML = '';
  selectedDetailColor = product.colors[0].name; // Default first
  
  product.colors.forEach((color, idx) => {
    const dot = document.createElement('button');
    dot.className = `color-dot ${idx === 0 ? 'active' : ''}`;
    dot.style.backgroundColor = color.value;
    dot.title = color.name;
    dot.setAttribute('aria-label', `Select color ${color.name}`);
    
    dot.addEventListener('click', () => {
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      selectedDetailColor = color.name;
    });

    elements.detailColors.appendChild(dot);
  });

  elements.productDetailModal.classList.add('active');
  elements.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeDetailModal() {
  elements.productDetailModal.classList.remove('active');
  elements.body.style.overflow = '';
  activeDetailProductId = null;
}

function adjustDetailQty(delta) {
  detailQty = Math.max(1, detailQty + delta);
  elements.detailQtyVal.textContent = detailQty;
}

// --- CART DRAWER TOGGLE ---
function toggleCartDrawer() {
  const isActive = elements.cartDrawerOverlay.classList.contains('active');
  if (isActive) {
    elements.cartDrawerOverlay.classList.remove('active');
    elements.body.style.overflow = '';
  } else {
    elements.cartDrawerOverlay.classList.add('active');
    elements.body.style.overflow = 'hidden';
  }
}

// --- CHECKOUT WIZARD FLOW ---
function openCheckoutModal() {
  if (state.cart.length === 0) return;
  
  // Close cart drawer if open
  elements.cartDrawerOverlay.classList.remove('active');
  
  // Initialize state
  state.checkoutStep = 1;
  updateCheckoutStepsUI();
  
  // Render checkout summary
  renderCheckoutSummary();

  // Reset form fields and remove error states
  document.querySelectorAll('.form-input').forEach(input => {
    input.classList.remove('error');
  });

  elements.checkoutModal.classList.add('active');
  elements.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  elements.checkoutModal.classList.remove('active');
  elements.body.style.overflow = '';
}

function renderCheckoutSummary() {
  elements.checkoutSummaryItems.innerHTML = '';
  
  state.cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'summary-item-line';
    row.innerHTML = `
      <span>${item.product.title} (x${item.quantity})</span>
      <span>₹${(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
    `;
    elements.checkoutSummaryItems.appendChild(row);
  });

  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  let discount = 0;
  if (state.appliedPromo) {
    discount = subtotal * (state.appliedPromo.discountPercent / 100);
    const discRow = document.createElement('div');
    discRow.className = 'summary-item-line';
    discRow.style.color = 'var(--color-success)';
    discRow.innerHTML = `
      <span>Discount (${state.appliedPromo.code})</span>
      <span>-₹${discount.toLocaleString('en-IN')}</span>
    `;
    elements.checkoutSummaryItems.appendChild(discRow);
  }

  const grandTotal = Math.max(0, subtotal - discount);
  elements.checkoutSummaryTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

function updateCheckoutStepsUI() {
  // Hide all contents
  elements.checkoutStep1.classList.remove('active');
  elements.checkoutStep2.classList.remove('active');
  elements.checkoutStep3.classList.remove('active');

  // Node classes
  elements.stepNode1.className = 'step-node';
  elements.stepNode2.className = 'step-node';
  elements.stepNode3.className = 'step-node';

  if (state.checkoutStep === 1) {
    elements.checkoutStep1.classList.add('active');
    elements.stepNode1.classList.add('active');
  } else if (state.checkoutStep === 2) {
    elements.checkoutStep2.classList.add('active');
    elements.stepNode1.classList.add('completed');
    elements.stepNode2.classList.add('active');
  } else if (state.checkoutStep === 3) {
    elements.checkoutStep3.classList.add('active');
    elements.stepNode1.classList.add('completed');
    elements.stepNode2.classList.add('completed');
    elements.stepNode3.classList.add('completed');
  }
}

function validateStep1() {
  const fields = ['co-first-name', 'co-last-name', 'co-address', 'co-city', 'co-zip'];
  let isValid = true;
  
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.classList.add('error');
      isValid = false;
    } else {
      el.classList.remove('error');
    }
  });

  if (!isValid) {
    showToast('Please fill out all shipping fields', 'error');
  }
  return isValid;
}

function validateStep2() {
  const cardNum = document.getElementById('co-card-num');
  const cardExp = document.getElementById('co-card-expiry');
  const cardCvv = document.getElementById('co-card-cvv');
  let isValid = true;

  // Simple validation checks
  if (cardNum.value.replace(/\s+/g, '').length < 16) {
    cardNum.classList.add('error');
    isValid = false;
  } else {
    cardNum.classList.remove('error');
  }

  // MM/YY format check
  if (!/^\d{2}\/\d{2}$/.test(cardExp.value.trim())) {
    cardExp.classList.add('error');
    isValid = false;
  } else {
    cardExp.classList.remove('error');
  }

  if (cardCvv.value.trim().length < 3) {
    cardCvv.classList.add('error');
    isValid = false;
  } else {
    cardCvv.classList.remove('error');
  }

  if (!isValid) {
    showToast('Please correct card payment information', 'error');
  }
  return isValid;
}

function processPaymentSimulated() {
  // Trigger successful checkout
  state.checkoutStep = 3;
  updateCheckoutStepsUI();
  
  // Clear cart
  state.cart = [];
  state.appliedPromo = null;
  saveCartToLocalStorage();
  savePromoToLocalStorage();
  renderCart();
  showToast('Order placed successfully! Confirming setup.', 'success');
}

// --- EVENT LISTENERS REGISTRATION ---
function setupEventListeners() {
  // Theme toggle
  elements.themeToggleBtn.addEventListener('click', toggleTheme);

  // Cart open/close drawer
  elements.cartToggleBtn.addEventListener('click', toggleCartDrawer);
  elements.cartCloseBtn.addEventListener('click', toggleCartDrawer);
  elements.cartDrawerOverlay.addEventListener('click', toggleCartDrawer);

  // Detail Modal Controls
  elements.detailCloseBtn.addEventListener('click', closeDetailModal);
  elements.productDetailModal.addEventListener('click', (e) => {
    if (e.target === elements.productDetailModal) closeDetailModal();
  });
  elements.detailQtyMinus.addEventListener('click', () => adjustDetailQty(-1));
  elements.detailQtyPlus.addEventListener('click', () => adjustDetailQty(1));
  elements.detailAddToCartBtn.addEventListener('click', () => {
    if (activeDetailProductId) {
      addToCart(activeDetailProductId, selectedDetailColor, detailQty);
      closeDetailModal();
    }
  });

  // Promo Code Listeners
  elements.promoApplyBtn.addEventListener('click', applyPromoCode);
  elements.promoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') applyPromoCode();
  });
  elements.promoRemoveBtn.addEventListener('click', removePromoCode);

  // Checkout modal controls
  elements.checkoutBtn.addEventListener('click', openCheckoutModal);
  elements.checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
  elements.checkoutModal.addEventListener('click', (e) => {
    if (e.target === elements.checkoutModal) closeCheckoutModal();
  });

  // Wizard Steps
  elements.step1Next.addEventListener('click', () => {
    if (validateStep1()) {
      state.checkoutStep = 2;
      updateCheckoutStepsUI();
    }
  });
  elements.step2Prev.addEventListener('click', () => {
    state.checkoutStep = 1;
    updateCheckoutStepsUI();
  });
  elements.step2Next.addEventListener('click', () => {
    if (validateStep2()) {
      // Simulate loading/processing
      elements.step2Next.disabled = true;
      elements.step2Next.textContent = 'Processing Payment...';
      setTimeout(() => {
        elements.step2Next.disabled = false;
        elements.step2Next.innerHTML = `Complete Order 
          <svg class="icon-svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>`;
        processPaymentSimulated();
      }, 1500);
    }
  });
  elements.step3Close.addEventListener('click', () => {
    closeCheckoutModal();
  });

  // Filters Event Listeners
  elements.filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filterCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Navbar Dropdown Categories Event Listeners
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const category = item.dataset.category;
      state.filterCategory = category;
      
      // Update the catalog filter buttons active state
      elements.filterButtons.forEach(btn => {
        if (btn.dataset.category === category) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      renderProducts();
      
      // Scroll to catalog section
      const catalogSection = document.getElementById('catalog');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
      
      // Show confirmation toast
      showToast(`Filtered by ${category === 'All' ? 'All Accessories' : category}`, 'info');
    });
  });

  // Sort Selector
  elements.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Live Search bar
  const handleSearch = (e) => {
    state.searchQuery = e.target.value;
    // Sync values between desktop and mobile search bars
    if (e.target === elements.searchInput) {
      elements.mobileSearchInput.value = e.target.value;
      updateSearchDropdown();
    } else {
      elements.searchInput.value = e.target.value;
    }
    renderProducts();
  };
  elements.searchInput.addEventListener('input', handleSearch);
  elements.mobileSearchInput.addEventListener('input', handleSearch);

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('search-dropdown');
    if (dropdown && !elements.searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });

  // Search input keydown (Enter to scroll to catalog)
  elements.searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const dropdown = document.getElementById('search-dropdown');
      if (dropdown) dropdown.classList.remove('active');
      const catalogSection = document.getElementById('catalog');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  // Keyboard accessibility for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (elements.productDetailModal.classList.contains('active')) {
        closeDetailModal();
      }
      if (elements.checkoutModal.classList.contains('active')) {
        closeCheckoutModal();
      }
      if (elements.cartDrawerOverlay.classList.contains('active')) {
        toggleCartDrawer();
      }
    }
  });

  // Format Expiration Date (MM/YY) auto-insertion
  const cardExp = document.getElementById('co-card-expiry');
  cardExp.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value.substring(0, 5);
  });

  // Format Card Number (space every 4 digits)
  const cardNum = document.getElementById('co-card-num');
  cardNum.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    let formatted = '';
    for (let i = 0; i < value.length && i < 16; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' ';
      }
      formatted += value[i];
    }
    e.target.value = formatted;
  });

  // --- BUNDLE BUILDER EVENT LISTENERS ---
  const configCards = document.querySelectorAll('.config-card');
  configCards.forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.type;
      
      // Remove active from other cards in the same group
      document.querySelectorAll(`.config-card[data-type="${type}"]`).forEach(c => {
        c.classList.remove('active');
      });
      
      // Select this card
      card.classList.add('active');
      recalculateBundle();
    });
  });

  const configAddBtn = document.getElementById('config-add-btn');
  if (configAddBtn) {
    configAddBtn.addEventListener('click', addBundleToCart);
  }

  // Initial recalculate
  recalculateBundle();

  // --- FAQ INTERACTIVE ACCORDION ---
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.faq-body');
      const isActive = item.classList.contains('active');
      
      // Close all other items first
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBody = otherItem.querySelector('.faq-body');
          otherBody.style.maxHeight = null;
          otherBody.style.opacity = 0;
        }
      });

      // Toggle this item
      if (isActive) {
        item.classList.remove('active');
        body.style.maxHeight = null;
        body.style.opacity = 0;
      } else {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
        body.style.opacity = 1;
      }
    });
  });

  // --- NEWSLETTER SIGNUP ---
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const emailVal = emailInput.value.trim();
      
      if (emailVal) {
        showToast(`Welcome! ${emailVal} has been subscribed to updates.`, 'success');
        emailInput.value = '';
      }
    });
  }
}

// --- CONFIGURATOR LOGIC ---
function recalculateBundle() {
  const activeKeyboard = document.querySelector('.config-card.active[data-type="keyboard"]');
  const activeMouse = document.querySelector('.config-card.active[data-type="mouse"]');
  const activeDeskpad = document.querySelector('.config-card.active[data-type="deskpad"]');
  const summaryContainer = document.getElementById('config-summary-list');
  
  if (!summaryContainer) return;
  summaryContainer.innerHTML = '';

  let subtotal = 0;
  
  // Add Keyboard to Summary
  if (activeKeyboard) {
    const price = parseFloat(activeKeyboard.dataset.price);
    const title = activeKeyboard.querySelector('.config-card-title').textContent;
    subtotal += price;
    addSummaryRow(summaryContainer, title, price);
  }

  // Add Mouse to Summary
  if (activeMouse) {
    const price = parseFloat(activeMouse.dataset.price);
    const title = activeMouse.querySelector('.config-card-title').textContent;
    subtotal += price;
    addSummaryRow(summaryContainer, title, price);
  }

  // Add Deskpad to Summary
  if (activeDeskpad && activeDeskpad.dataset.id !== 'none') {
    const price = parseFloat(activeDeskpad.dataset.price);
    const title = activeDeskpad.querySelector('.config-card-title').textContent;
    subtotal += price;
    addSummaryRow(summaryContainer, title, price);
  } else if (activeDeskpad) {
    addSummaryRow(summaryContainer, 'No Desk Pad Selected', 0);
  }

  // Calculations
  const discountPercent = 15;
  const discountAmount = subtotal * (discountPercent / 100);
  const total = subtotal - discountAmount;

  document.getElementById('config-subtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById('config-discount').textContent = `-₹${discountAmount.toLocaleString('en-IN')}`;
  document.getElementById('config-total').textContent = `₹${total.toLocaleString('en-IN')}`;
}

function addSummaryRow(container, label, price) {
  const row = document.createElement('div');
  row.className = 'config-summary-item';
  row.innerHTML = `
    <span class="config-summary-label">${label}</span>
    <span class="config-summary-val">₹${price.toLocaleString('en-IN')}</span>
  `;
  container.appendChild(row);
}

function addBundleToCart() {
  const activeKeyboard = document.querySelector('.config-card.active[data-type="keyboard"]');
  const activeMouse = document.querySelector('.config-card.active[data-type="mouse"]');
  const activeDeskpad = document.querySelector('.config-card.active[data-type="deskpad"]');
  
  if (!activeKeyboard || !activeMouse || !activeDeskpad) return;

  const bundleDiscountFactor = 0.85; // 15% off

  // Add Keyboard (Bundle edition)
  const kbId = activeKeyboard.dataset.id;
  const kbProduct = PRODUCTS.find(p => p.id === kbId);
  addToCart(kbId, kbProduct.colors[0].name, 1, kbProduct.price * bundleDiscountFactor, `${kbProduct.title} (Bundle)`);

  // Add Mouse (Bundle edition)
  const msId = activeMouse.dataset.id;
  const msColor = activeMouse.dataset.color || 'Shadow Black';
  const msProduct = PRODUCTS.find(p => p.id === msId);
  addToCart(msId, msColor, 1, msProduct.price * bundleDiscountFactor, `${msProduct.title} (Bundle)`);

  // Add Deskpad (Bundle edition)
  const dpId = activeDeskpad.dataset.id;
  if (dpId !== 'none') {
    const dpProduct = PRODUCTS.find(p => p.id === dpId);
    addToCart(dpId, dpProduct.colors[0].name, 1, dpProduct.price * bundleDiscountFactor, `${dpProduct.title} (Bundle)`);
  }

  showToast('Setup Bundle successfully added with 15% discount!', 'success');
  toggleCartDrawer(); // Open cart sidebar
}

// --- SEARCH DROPDOWN LOGIC ---
function updateSearchDropdown() {
  const dropdown = document.getElementById('search-dropdown');
  if (!dropdown) return;

  const query = state.searchQuery.trim().toLowerCase();

  if (!query) {
    dropdown.classList.remove('active');
    return;
  }

  // Find matches
  const matches = PRODUCTS.filter(prod => 
    prod.title.toLowerCase().includes(query) || 
    prod.category.toLowerCase().includes(query) ||
    prod.description.toLowerCase().includes(query)
  );

  dropdown.innerHTML = '';
  dropdown.classList.add('active');

  // Header
  const header = document.createElement('div');
  header.className = 'search-dropdown-header';
  header.textContent = `Matching Gear (${matches.length})`;
  dropdown.appendChild(header);

  if (matches.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'search-dropdown-empty';
    empty.textContent = 'No matching accessories found.';
    dropdown.appendChild(empty);
    return;
  }

  // Items (Limit to 5 for neatness)
  const displayItems = matches.slice(0, 5);
  displayItems.forEach(product => {
    const item = document.createElement('div');
    item.className = 'search-dropdown-item';
    item.innerHTML = `
      <img class="search-dropdown-item-img" src="${product.image}" alt="${product.title}">
      <div class="search-dropdown-item-info">
        <span class="search-dropdown-item-title">${product.title}</span>
        <span class="search-dropdown-item-cat">${product.category}</span>
      </div>
      <span class="search-dropdown-item-price">₹${product.price.toLocaleString('en-IN')}</span>
    `;

    // Click handler to open details
    item.addEventListener('click', () => {
      openDetailModal(product.id);
      dropdown.classList.remove('active');
      elements.searchInput.value = '';
      state.searchQuery = '';
      elements.mobileSearchInput.value = '';
      renderProducts();
    });

    dropdown.appendChild(item);
  });

  // Footer
  const footer = document.createElement('div');
  footer.className = 'search-dropdown-footer';
  const viewAllBtn = document.createElement('button');
  viewAllBtn.className = 'search-dropdown-view-all';
  viewAllBtn.textContent = 'View all in Catalog';
  viewAllBtn.addEventListener('click', () => {
    dropdown.classList.remove('active');
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  footer.appendChild(viewAllBtn);
  dropdown.appendChild(footer);
}

