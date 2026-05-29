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
    description: 'A premium 75% mechanical keyboard designed for typists who care about acoustic resonance. Built with a heavy CNC anodized aluminum shell, pre-lubricated Kove Linear switches, and custom Cherry profile Taro keycaps.',
    colors: [{ name: 'Carbon Black' }]
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
    description: 'Audiophile headphones crafted with hand-trimmed sheepskin cushions and an open-back wooden acoustic chamber.',
    colors: [{ name: 'Matte Black' }]
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
    description: 'An ultra-lightweight 68g ergonomic mouse designed to rest naturally in your palm.',
    colors: [{ name: 'Shadow Black' }]
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
    description: 'An asymmetrical monitor lamp that casts clean light straight down onto your work path. Zero screen glare.',
    colors: [{ name: 'Anodized Black' }]
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
    description: 'Our flagship mechanical keyboard. Housed in a solid, CNC-routed American walnut wooden shell.',
    colors: [{ name: 'Carbon Black' }]
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
    description: 'Compact true-wireless earbuds that fit snugly inside the ear canal.',
    colors: [{ name: 'Matte Black' }]
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
    description: 'Thick 4mm desk pad constructed from premium organic merino wool felt.',
    colors: [{ name: 'Slate Grey' }]
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
    description: 'Hand-assembled walnut monitor shelf that elevates your displays for a comfortable neck posture.',
    colors: [{ name: 'Natural Walnut' }]
  }
];

// --- APP STATE ---
let state = {
  cart: [],
  filterCategory: 'All',
  searchQuery: '',
  sortBy: 'featured'
};

// --- DOM ELEMENTS ---
const elements = {
  body: document.body,
  cartToggleBtn: document.getElementById('cart-toggle'),
  cartBadge: document.getElementById('cart-badge'),
  cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
  cartDrawer: document.getElementById('cart-drawer'),
  cartCloseBtn: document.getElementById('cart-close'),
  cartItemsContainer: document.getElementById('cart-items'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartTotal: document.getElementById('cart-total'),
  checkoutBtn: document.getElementById('checkout-btn'),
  
  // Product catalog elements
  productsGrid: document.getElementById('products-grid'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  sortSelect: document.getElementById('sort-select'),
  searchInput: document.getElementById('search-input'),

  // Checkout elements
  checkoutModal: document.getElementById('checkout-modal'),
  checkoutCloseBtn: document.getElementById('checkout-close'),
  checkoutForm: document.getElementById('checkout-form'),
  checkoutModalBody: document.getElementById('checkout-modal-body'),
  checkoutSummaryTotal: document.getElementById('checkout-summary-total'),

  // Toast
  toastContainer: document.getElementById('toast-container')
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  loadLocalStorage();
  renderProducts();
  renderCart();
  setupEventListeners();
});

// --- LOCAL STORAGE SYNC ---
function loadLocalStorage() {
  const savedCart = localStorage.getItem('aura_cart');
  if (savedCart) {
    state.cart = JSON.parse(savedCart);
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem('aura_cart', JSON.stringify(state.cart));
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconMarkup = '';
  if (type === 'success') {
    iconMarkup = `✓ `;
  } else if (type === 'warning') {
    iconMarkup = `⚠ `;
  } else if (type === 'error') {
    iconMarkup = `✗ `;
  } else {
    iconMarkup = `ℹ `;
  }

  toast.innerHTML = `<span>${iconMarkup}${message}</span>`;
  elements.toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// --- RENDER CATALOG ---
function renderProducts() {
  // Filter products
  let filtered = PRODUCTS.filter(prod => {
    const matchesCategory = state.filterCategory === 'All' || prod.category === state.filterCategory;
    const matchesSearch = prod.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          prod.category.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Clear grid
  elements.productsGrid.innerHTML = '';
  
  if (filtered.length === 0) {
    elements.productsGrid.innerHTML = `
      <div class="no-results">
        <h3>No gear matches your search</h3>
        <p>Try clearing your search query or picking a different category filter.</p>
      </div>
    `;
    return;
  }

  // Render cards
  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Star rating rendering
    let starsHtml = '';
    const roundedRating = Math.round(product.rating);
    for (let i = 1; i <= 5; i++) {
      starsHtml += (i <= roundedRating) ? '★' : '☆';
    }

    const badgeHtml = product.badge 
      ? `<span class="product-badge badge badge-${product.badge}">${product.badgeText}</span>` 
      : '';

    card.innerHTML = `
      <div class="product-img-wrapper">
        ${badgeHtml}
        <img class="product-img" src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-card-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-desc-simple">${product.description}</p>
        <div class="rating-container">
          <div class="stars">${starsHtml}</div>
          <span class="rating-val">${product.rating} (${product.reviews})</span>
        </div>
        <div class="product-footer">
          <span class="price-tag">₹${product.price.toLocaleString('en-IN')}</span>
          <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    `;

    // Quick Add Click event
    card.querySelector('.add-to-cart-btn').addEventListener('click', () => {
      addToCart(product.id);
    });

    elements.productsGrid.appendChild(card);
  });
}

// --- CART LOGIC ---
function renderCart() {
  elements.cartItemsContainer.innerHTML = '';
  
  if (state.cart.length === 0) {
    elements.cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <p class="cart-empty-text">Your workspace bag is empty</p>
      </div>
    `;
    
    elements.cartBadge.style.display = 'none';
    elements.checkoutBtn.disabled = true;
  } else {
    elements.checkoutBtn.disabled = false;
    
    // Cart Badge counter
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
          <div class="cart-item-footer">
            <span class="cart-item-price">₹${(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
            <div class="cart-item-qty">
              <button class="cart-item-qty-btn qty-minus" data-index="${index}">-</button>
              <span class="cart-item-qty-val">${item.quantity}</span>
              <button class="cart-item-qty-btn qty-plus" data-index="${index}">+</button>
            </div>
          </div>
        </div>
        <button class="cart-item-remove" data-index="${index}" aria-label="Remove Item">&times;</button>
      `;

      // Event handlers inside cart
      cartItemEl.querySelector('.qty-minus').addEventListener('click', () => adjustCartQty(index, -1));
      cartItemEl.querySelector('.qty-plus').addEventListener('click', () => adjustCartQty(index, 1));
      cartItemEl.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(index));

      elements.cartItemsContainer.appendChild(cartItemEl);
    });
  }

  calculateTotals();
}

function calculateTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  elements.cartSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  elements.cartTotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (elements.checkoutSummaryTotal) {
    elements.checkoutSummaryTotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  }
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIdx = state.cart.findIndex(item => item.product.id === productId);

  if (existingIdx > -1) {
    state.cart[existingIdx].quantity += 1;
  } else {
    state.cart.push({
      product: product,
      quantity: 1
    });
  }

  saveCartToLocalStorage();
  renderCart();
  showToast(`Added ${product.title} to cart!`, 'success');
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

// --- CART DRAWER OVERLAYS ---
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

// --- CHECKOUT PROCESS ---
function openCheckoutModal() {
  if (state.cart.length === 0) return;
  
  // Close cart drawer
  elements.cartDrawerOverlay.classList.remove('active');
  
  // Render total
  calculateTotals();

  // Reset modal content back to checkout form if it was showing a success message
  elements.checkoutModalBody.innerHTML = `
    <h2 id="checkout-title" class="checkout-modal-title">Secure Checkout</h2>
    <p class="checkout-modal-desc">Simulated checkout environment. Do not enter actual credit card details.</p>

    <form id="checkout-form" class="checkout-form" onsubmit="event.preventDefault();">
      <div class="form-section-title">Shipping Address</div>
      <div class="form-grid two-cols">
        <div class="form-group">
          <label for="co-name" class="form-label">Full Name *</label>
          <input type="text" id="co-name" class="form-input" placeholder="e.g. Richard Hendricks" required>
        </div>
        <div class="form-group">
          <label for="co-email" class="form-label">Email Address *</label>
          <input type="email" id="co-email" class="form-input" placeholder="e.g. richard@hooli.com" required>
        </div>
      </div>

      <div class="form-group">
        <label for="co-address" class="form-label">Address *</label>
        <input type="text" id="co-address" class="form-input" placeholder="e.g. 5230 Newell Road" required>
      </div>

      <div class="form-grid two-cols">
        <div class="form-group">
          <label for="co-city" class="form-label">City *</label>
          <input type="text" id="co-city" class="form-input" placeholder="e.g. Palo Alto" required>
        </div>
        <div class="form-group">
          <label for="co-zip" class="form-label">Zip / Postal Code *</label>
          <input type="text" id="co-zip" class="form-input" placeholder="e.g. 94303" required>
        </div>
      </div>

      <div class="form-section-title" style="margin-top: 20px;">Payment Details</div>
      <div class="form-group">
        <label for="co-card-num" class="form-label">Card Number (Mock) *</label>
        <input type="text" id="co-card-num" class="form-input" placeholder="4111 2222 3333 4444" required>
      </div>

      <div class="form-grid two-cols">
        <div class="form-group">
          <label for="co-card-expiry" class="form-label">Expiration Date *</label>
          <input type="text" id="co-card-expiry" class="form-input" placeholder="MM/YY" required>
        </div>
        <div class="form-group">
          <label for="co-card-cvv" class="form-label">CVV *</label>
          <input type="password" id="co-card-cvv" class="form-input" placeholder="123" maxlength="4" required>
        </div>
      </div>

      <div class="checkout-footer-summary">
        <span>Total to Pay:</span>
        <span id="checkout-summary-total" style="font-weight: 800; font-size: 20px;">₹${(state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)).toLocaleString('en-IN')}</span>
      </div>

      <button type="submit" id="place-order-btn" class="btn btn-primary" style="width: 100%; height: 50px; margin-top: 20px;">
        Place Order
      </button>
    </form>
  `;

  // Bind events for formatting
  setupCheckoutFormatting();

  // Handle form submit
  document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    processCheckout();
  });

  elements.checkoutModal.classList.add('active');
  elements.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  elements.checkoutModal.classList.remove('active');
  elements.body.style.overflow = '';
}

function setupCheckoutFormatting() {
  const cardNum = document.getElementById('co-card-num');
  const cardExp = document.getElementById('co-card-expiry');

  if (cardNum) {
    cardNum.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      let formatted = '';
      for (let i = 0; i < val.length && i < 16; i++) {
        if (i > 0 && i % 4 === 0) formatted += ' ';
        formatted += val[i];
      }
      e.target.value = formatted;
    });
  }

  if (cardExp) {
    cardExp.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 2) {
        val = val.substring(0, 2) + '/' + val.substring(2, 4);
      }
      e.target.value = val.substring(0, 5);
    });
  }
}

function processCheckout() {
  const placeOrderBtn = document.getElementById('place-order-btn');
  if (placeOrderBtn) {
    placeOrderBtn.disabled = true;
    placeOrderBtn.textContent = 'Processing Order...';
  }

  setTimeout(() => {
    // Show success view
    elements.checkoutModalBody.innerHTML = `
      <div class="success-panel" style="text-align: center; padding: 40px 20px;">
        <div class="success-icon" style="font-size: 50px; color: var(--color-success); margin-bottom: 20px;">✓</div>
        <h3 class="hero-title" style="font-size: 28px; margin-bottom: 12px; background: linear-gradient(135deg, var(--text-primary) 20%, var(--color-primary) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Thank You!</h3>
        <p style="font-size: 16px; margin-bottom: 10px; font-weight: 600;">Your simulated order has been placed successfully.</p>
        <p style="color: var(--text-secondary); font-size: 13px; margin-bottom: 30px;">
          This was a mock transaction. No actual charges were processed.
        </p>
        <button id="success-close-btn" class="btn btn-primary" style="padding: 12px 30px;">Return to Shop</button>
      </div>
    `;

    document.getElementById('success-close-btn').addEventListener('click', closeCheckoutModal);

    // Empty Cart
    state.cart = [];
    saveCartToLocalStorage();
    renderCart();
    showToast('Checkout completed successfully!', 'success');
  }, 1200);
}

// --- EVENTS REGISTRATION ---
function setupEventListeners() {
  // Cart toggle triggers
  elements.cartToggleBtn.addEventListener('click', toggleCartDrawer);
  elements.cartCloseBtn.addEventListener('click', toggleCartDrawer);
  elements.cartDrawerOverlay.addEventListener('click', toggleCartDrawer);

  // Catalog category filter buttons
  elements.filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filterCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Sort selector change
  elements.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Search input typing
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderProducts();
  });

  // Checkout modal open and close
  elements.checkoutBtn.addEventListener('click', openCheckoutModal);
  elements.checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
  elements.checkoutModal.addEventListener('click', (e) => {
    if (e.target === elements.checkoutModal) closeCheckoutModal();
  });

  // Newsletter Form submit
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const val = emailInput.value.trim();
      if (val) {
        showToast(`Subscribed ${val} to our newsletter!`, 'success');
        emailInput.value = '';
      }
    });
  }

  // Escape key close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCheckoutModal();
      if (elements.cartDrawerOverlay.classList.contains('active')) {
        toggleCartDrawer();
      }
    }
  });
}
