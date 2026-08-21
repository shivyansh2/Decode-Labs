// ============================================
// Grove & Roast — Project 1(Decode-Labs)
// Pure vanilla JS state management, no frameworks.
// ============================================

const products = [
  {
    id: 'p1',
    photo: './images/1.png',
    name: 'Ethiopian Sunrise',
    desc: 'Bright, light-bodied, with distinct jasmine, citrus, and crisp floral or lemongrass notes',
    roast: 2,
    price: 180.00,
    icon: 'bag',
    tint: 'tint-light',
  },
  {
    id: 'p2',
    photo: './images/2.png',
    name: 'Sumatra Dark Reserve',
    desc: ' Earthy, damp wood, baker chocolate, pepper, and dried herbs',
    roast: 5,
    price: 190.00,
    icon: 'bag',
    tint: 'tint-dark',
  },
  {
    id: 'p3',
    photo: './images/3.png',
    name: 'House Blend',
    desc: 'Mixture created by a café or roaster to deliver a consistent, balanced flavor year-round',
    roast: 3,
    price: 160.00,
    icon: 'bag',
    tint: 'tint-medium',
  },
  {
    id: 'p4',
    photo: './images/4.png',
    name: 'Kenyan AA',
    desc: 'Juicy, wine-like acidity with blackcurrant notes.',
    roast: 2,
    price: 200.00,
    icon: 'bag',
    tint: 'tint-light',
  },
  {
    id: 'p5',
    photo: './images/5.png',
    name: 'Guatemala Antigua',
    desc: 'Cocoa and spice, full body, gentle smokiness.',
    roast: 3,
    price: 180.50,
    icon: 'bag',
    tint: 'tint-medium',
  },
  {
    id: 'p6',
    photo: './images/6.png',
    name: 'Decaf House Blend',
    desc: 'Swiss Water processed. All the flavor, none of the buzz.',
    roast: 3,
    price: 170.00,
    icon: 'bag',
    tint: 'tint-medium',
  },
  {
    id: 'p7',
    photo: './images/7.png',
    name: 'Cold Brew Concentrate',
    desc: 'Steeped 18 hours. Dilute 1:1, or don\u2019t.',
    roast: 4,
    price: 140.00,
    icon: 'bottle',
  },
  {
    id: 'p8',
    photo: './images/8.png',
    name: 'Pour-Over Dripper',
    desc: 'Ceramic, ribbed for even extraction.',
    roast: 0,
    price: 320.00,
    icon: 'dripper',
  },
  {
    id: 'p9',
    photo: './images/9.png',
    name: 'Digital Scale',
    desc: '0.1g precision, built-in timer',
    roast: 0,
    price: 450.00,
    icon: 'scale',
  },
  {
    id: 'p10',
    photo: './images/10.png',
    name: 'French Press',
    desc: '3-cup borosilicate glass, stainless mesh filter.',
    roast: 0,
    price: 280.00,
    icon: 'press',
  },
  {
    id: 'p11',
    photo: './images/11.png',
    name: 'Ceramic Mug Set',
    desc: 'Set of four, hand-glazed, holds 12oz each.',
    roast: 0,
    price: 240.00,
    icon: 'mug',
  },
  {
    id: 'p12',
    photo: './images/12.png',
    name: 'Storage Canister',
    desc: 'Airtight, one-way CO2 valve, keeps beans fresh 4x longer.',
    roast: 0,
    price: 220.00,
    icon: 'canister',
  },
];


const TINTS = {
  'tint-light':  { top: '#E4D2A8', bot: '#CBA96F', label: '#D98A4A', bean: '#7A5A38' },
  'tint-medium': { top: '#CBA876', bot: '#A5936F', label: '#BF4E24', bean: '#5B4530' },
  'tint-dark':   { top: '#9A7C55', bot: '#6E5D42', label: '#6E5D42', bean: '#332619' },
};

function illustrationBag(uid, tintKey) {
  const t = TINTS[tintKey] || TINTS['tint-medium'];
  return `
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <defs>
      <linearGradient id="bagGrad${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${t.top}"/>
        <stop offset="100%" stop-color="${t.bot}"/>
      </linearGradient>
      <radialGradient id="bagShadow${uid}" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#000" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="36" cy="62" rx="20" ry="4" fill="url(#bagShadow${uid})"/>
    <path d="M20 20c0-3 2-5 5-5h22c3 0 5 2 5 5l3 32c.6 5-3 9-8 9H25c-5 0-8.6-4-8-9l3-32z" fill="url(#bagGrad${uid})"/>
    <path d="M22 22h28" stroke="#fff" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round"/>
    <path d="M25 15c0-3 1.5-5 4-5h14c2.5 0 4 2 4 5" stroke="${t.bot}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="36" cy="34" r="10" fill="#F4EDDF" fill-opacity="0.9"/>
    <circle cx="33" cy="32" r="2.6" fill="${t.bean}"/>
    <circle cx="39" cy="35" r="2.6" fill="${t.bean}"/>
    <circle cx="35" cy="38" r="2.2" fill="${t.bean}"/>
    <rect x="27" y="48" width="18" height="7" rx="3.5" fill="${t.label}"/>
    <circle cx="44" cy="58" r="2" fill="${t.bot}" stroke="#fff" stroke-opacity="0.4"/>
  </svg>`;
}

function illustrationBottle(uid) {
  return `
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <defs>
      <linearGradient id="liquidGrad${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5B4028"/>
        <stop offset="100%" stop-color="#2A1B0E"/>
      </linearGradient>
      <linearGradient id="glassGrad${uid}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#A0D4E0" stop-opacity="0.25"/>
        <stop offset="50%" stop-color="#ffffff" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#A0D4E0" stop-opacity="0.25"/>
      </linearGradient>
      <radialGradient id="bottleShadow${uid}" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#000" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="36" cy="62" rx="16" ry="4" fill="url(#bottleShadow${uid})"/>
    <rect x="30" y="8" width="12" height="10" rx="2" fill="#3A2A1C"/>
    <path d="M28 18h16l4 10v28a5 5 0 0 1-5 5H29a5 5 0 0 1-5-5V28l4-10z" fill="url(#glassGrad${uid})" stroke="#fff" stroke-opacity="0.4"/>
    <path d="M25 34h22v17a5 5 0 0 1-5 5H30a5 5 0 0 1-5-5V34z" fill="url(#liquidGrad${uid})"/>
    <rect x="24" y="38" width="24" height="9" rx="1.5" fill="#FFFAF0"/>
    <rect x="27" y="41" width="14" height="1.6" rx="0.8" fill="#BF4E24"/>
    <rect x="27" y="44" width="10" height="1.6" rx="0.8" fill="#8E3219" opacity="0.6"/>
  </svg>`;
}

function illustrationDripper(uid) {
  return `
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <defs>
      <linearGradient id="ceramicGrad${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFAF0"/>
        <stop offset="100%" stop-color="#E8DCC7"/>
      </linearGradient>
      <linearGradient id="carafeGrad${uid}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#A0D4E0" stop-opacity="0.2"/>
        <stop offset="50%" stop-color="#fff" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#A0D4E0" stop-opacity="0.2"/>
      </linearGradient>
      <radialGradient id="dripShadow${uid}" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#000" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="36" cy="62" rx="18" ry="4" fill="url(#dripShadow${uid})"/>
    <path d="M22 38h28l-3 20a4 4 0 0 1-4 3H29a4 4 0 0 1-4-3l-3-20z" fill="url(#carafeGrad${uid})" stroke="#fff" stroke-opacity="0.5"/>
    <path d="M48 42c4 0 7 2.5 7 6s-3 6-7 6" stroke="#6E5D42" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M18 16h36l-6 22a4 4 0 0 1-4 3H28a4 4 0 0 1-4-3l-6-22z" fill="url(#ceramicGrad${uid})" stroke="#D8CBAF"/>
    <path d="M24 22h24" stroke="#C9B893" stroke-width="1.5"/>
    <path d="M26 27h20" stroke="#C9B893" stroke-width="1.5"/>
  </svg>`;
}

function illustrationScale(uid) {
  return `
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <defs>
      <linearGradient id="scaleGrad${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A342C"/>
        <stop offset="100%" stop-color="#25211D"/>
      </linearGradient>
      <radialGradient id="scaleShadow${uid}" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#000" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="36" cy="60" rx="20" ry="4" fill="url(#scaleShadow${uid})"/>
    <rect x="14" y="30" width="44" height="26" rx="6" fill="url(#scaleGrad${uid})"/>
    <rect x="20" y="36" width="32" height="12" rx="2.5" fill="#151210"/>
    <text x="36" y="45" font-family="monospace" font-size="9" fill="#7CD9A5" text-anchor="middle">18.5g</text>
    <circle cx="24" cy="52" r="1.6" fill="#BF4E24"/>
    <circle cx="30" cy="52" r="1.6" fill="#6f675d"/>
    <rect x="18" y="22" width="36" height="8" rx="3" fill="#4A433A"/>
  </svg>`;
}

function illustrationPress(uid) {
  return `
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <defs>
      <linearGradient id="pressGlass${uid}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#A0D4E0" stop-opacity="0.25"/>
        <stop offset="50%" stop-color="#fff" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#A0D4E0" stop-opacity="0.25"/>
      </linearGradient>
      <linearGradient id="pressLiquid${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5B4028"/>
        <stop offset="100%" stop-color="#2A1B0E"/>
      </linearGradient>
      <radialGradient id="pressShadow${uid}" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#000" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="36" cy="62" rx="16" ry="4" fill="url(#pressShadow${uid})"/>
    <rect x="24" y="26" width="24" height="32" rx="3" fill="url(#pressGlass${uid})" stroke="#fff" stroke-opacity="0.5"/>
    <rect x="26" y="40" width="20" height="17" fill="url(#pressLiquid${uid})"/>
    <rect x="20" y="20" width="32" height="6" rx="3" fill="#3A342C"/>
    <rect x="33" y="10" width="6" height="12" rx="2" fill="#3A342C"/>
    <circle cx="36" cy="9" r="4" fill="#25211D"/>
    <path d="M48 30c4 1 6 4 6 7s-2 5-5 6" stroke="#3A342C" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}

function illustrationMug(uid) {
  return `
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <defs>
      <linearGradient id="mugGradBack${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E8DCC7"/>
        <stop offset="100%" stop-color="#D6C6A5"/>
      </linearGradient>
      <linearGradient id="mugGradFront${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFAF0"/>
        <stop offset="100%" stop-color="#F0E4CC"/>
      </linearGradient>
      <radialGradient id="mugShadow${uid}" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#000" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="38" cy="60" rx="20" ry="4" fill="url(#mugShadow${uid})"/>
    <path class="steam-path steam-1" d="M24 18c-6-7 6-13 0-22" stroke="#BF4E24" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6"/>
    <g transform="translate(10,6)">
      <rect x="12" y="22" width="26" height="26" rx="4" fill="url(#mugGradBack${uid})"/>
      <path d="M38 28h5a6 6 0 0 1 0 12h-5" stroke="#C9B893" stroke-width="2.5" fill="none"/>
    </g>
    <g transform="translate(-4,10)">
      <rect x="20" y="20" width="28" height="28" rx="4" fill="url(#mugGradFront${uid})" stroke="#E4D6B8"/>
      <path d="M48 26h5a6.5 6.5 0 0 1 0 13h-5" stroke="#D8CBAF" stroke-width="3" fill="none"/>
      <rect x="24" y="24" width="20" height="3" rx="1.5" fill="#BF4E24" opacity="0.8"/>
    </g>
  </svg>`;
}

function illustrationCanister(uid) {
  return `
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <defs>
      <linearGradient id="canGrad${uid}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#8A8078"/>
        <stop offset="50%" stop-color="#C6BEB4"/>
        <stop offset="100%" stop-color="#8A8078"/>
      </linearGradient>
      <radialGradient id="canShadow${uid}" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#000" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="36" cy="62" rx="16" ry="4" fill="url(#canShadow${uid})"/>
    <rect x="20" y="24" width="32" height="34" rx="4" fill="url(#canGrad${uid})"/>
    <ellipse cx="36" cy="24" rx="16" ry="4" fill="#D6CFC5"/>
    <ellipse cx="36" cy="22" rx="16" ry="4" fill="#EDE8E1"/>
    <circle cx="36" cy="22" r="6" fill="#F4EDDF" fill-opacity="0.9"/>
    <circle cx="34" cy="21" r="1.6" fill="#5B4530"/>
    <circle cx="38" cy="23" r="1.6" fill="#5B4530"/>
    <rect x="30" y="14" width="12" height="5" rx="2" fill="#6E5D42"/>
    <circle cx="36" cy="40" r="3" fill="#25211D" opacity="0.35"/>
  </svg>`;
}

function getIllustration(type, uid, tintKey) {
  switch (type) {
    case 'bag': return illustrationBag(uid, tintKey);
    case 'bottle': return illustrationBottle(uid);
    case 'dripper': return illustrationDripper(uid);
    case 'scale': return illustrationScale(uid);
    case 'press': return illustrationPress(uid);
    case 'mug': return illustrationMug(uid);
    case 'canister': return illustrationCanister(uid);
    default: return '';
  }
}

let cart = {}; // 

const productGrid = document.getElementById('productGrid');
const cartToggle = document.getElementById('cartToggle');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItemsEl = document.getElementById('cartItems');
const cartEmptyEl = document.getElementById('cartEmpty');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

function renderProducts() {
  productGrid.innerHTML = products.map((p) => {
    const dots = Array.from({ length: 5 }, (_, i) =>
      `<span class="roast-dot ${i < p.roast ? 'filled' : ''}"></span>`
    ).join('');

    const roastLabel = p.roast === 0 ? 'Gear' : `Roast level ${p.roast} of 5`;

    const visual = p.photo
      ? `<img class="product-photo ${p.tint || ''}" src="${p.photo}" alt="${p.name}" data-id="${p.id}" loading="lazy">`
      : getIllustration(p.icon, p.id, p.tint);

    return `
      <article class="product-card">
        <div class="product-visual" aria-hidden="true">${visual}</div>
        <div class="product-body">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          ${p.roast > 0 ? `
            <div class="roast-level">
              <span class="roast-dots" role="img" aria-label="${roastLabel}">${dots}</span>
              <span aria-hidden="true">${roastLabel}</span>
            </div>` : `<div class="roast-level"><span>${roastLabel}</span></div>`
          }
        </div>
        <div class="product-footer">
          <span class="product-price">₹${p.price.toFixed(2)}</span>
          <button class="add-btn" data-id="${p.id}">Add to cart</button>
        </div>
      </article>
    `;
  }).join('');

  productGrid.querySelectorAll('.add-btn').forEach((btn) => {
    btn.addEventListener('click', () => addToCart(btn.dataset.id));
  });

  productGrid.querySelectorAll('.product-photo').forEach((img) => {
    img.addEventListener('error', () => {
      const product = products.find((p) => p.id === img.dataset.id);
      if (product) {
        img.outerHTML = getIllustration(product.icon, product.id, product.tint);
      }
    }, { once: true });
  });
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  bumpCartIcon();
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}

function cartCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === id);
    return sum + product.price * qty;
  }, 0);
}

function renderCart() {
  const entries = Object.entries(cart);
  cartCountEl.textContent = cartCount();

  if (entries.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty" id="cartEmpty">Your cart is empty. Go find a roast you like.</p>';
    checkoutBtn.disabled = true;
  } else {
    cartItemsEl.innerHTML = entries.map(([id, qty]) => {
      const product = products.find((p) => p.id === id);
      return `
        <div class="cart-item">
          <div>
            <p class="cart-item-name">${product.name}</p>
            <p class="cart-item-price">₹${product.price.toFixed(2)} each</p>
          </div>
          <div class="qty-controls">
            <button class="qty-btn" data-id="${id}" data-delta="-1" aria-label="Remove one ${product.name}">&minus;</button>
            <span aria-live="off">${qty}</span>
            <button class="qty-btn" data-id="${id}" data-delta="1" aria-label="Add one more ${product.name}">+</button>
          </div>
        </div>
      `;
    }).join('');
    checkoutBtn.disabled = false;

    cartItemsEl.querySelectorAll('.qty-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        changeQty(btn.dataset.id, parseInt(btn.dataset.delta, 10));
      });
    });
  }

  cartTotalEl.textContent = `₹${cartTotal().toFixed(2)}`;
}

function openCart() {
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  cartOverlay.hidden = false;
  cartToggle.setAttribute('aria-expanded', 'true');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  cartOverlay.hidden = true;
  cartToggle.setAttribute('aria-expanded', 'false');
}

function bumpCartIcon() {
  cartToggle.classList.remove('bump');
  void cartToggle.offsetWidth;
  cartToggle.classList.add('bump');
}

cartToggle.addEventListener('click', () => {
  const isOpen = cartDrawer.classList.contains('open');
  isOpen ? closeCart() : openCart();
});
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCart();
});

checkoutBtn.addEventListener('click', () => {
  alert(`Checkout total:₹${cartTotal().toFixed(2)}\n(Just a Front-End architecture interface.)`);
});

renderProducts();
renderCart();

document.querySelectorAll('.faq-question').forEach((btn) => {
  const answer = btn.nextElementSibling;

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.faq-question[aria-expanded="true"]').forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.setAttribute('aria-expanded', 'false');
        otherBtn.nextElementSibling.style.maxHeight = null;
      }
    });

    btn.setAttribute('aria-expanded', String(!isOpen));
    answer.style.maxHeight = isOpen ? null : `${answer.scrollHeight}px`;
  });
});

const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const formMessage = document.getElementById('formMessage');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newsletterEmail.dataset.touched = 'true';

  const email = newsletterEmail.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    formMessage.textContent = 'That doesn\u2019t look like a valid email — mind double-checking it?';
    formMessage.className = 'form-message error';
    newsletterEmail.focus();
    return;
  }

  formMessage.textContent = `You're in! We'll email ${email} when the next batch drops.`;
  formMessage.className = 'form-message success';
  newsletterForm.reset();
  newsletterEmail.dataset.touched = 'false';
});

newsletterEmail.addEventListener('blur', () => {
  newsletterEmail.dataset.touched = 'true';
});
