// Reads the two content files Mom edits and fills in the page.

const TINTS = ['var(--blush)', 'var(--lavender)', 'var(--mint)', 'var(--butter)'];
const ICONS = { wedding: 'heart', shagun: 'envelope', festive: 'sparkle', baby: 'star' };

// Small helper: el('a', { href: '#' }, 'text') makes <a href="#">text</a>
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  node.append(...children);
  return node;
}

function icon(name) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', '#i-' + name);
  svg.append(use);
  return svg;
}

function iconFor(category) {
  return ICONS[category.toLowerCase()] || 'gift';
}

// "9876543210" -> "919876543210". Anything that isn't a real number yet gives "".
function indianNumber(text) {
  const digits = String(text || '').replace(/\D/g, '');
  if (digits.length === 10) return '91' + digits;
  if (digits.length === 12 && digits.startsWith('91')) return digits;
  return '';
}

function whatsappLink(number, message) {
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : '#';
}

function formatPrice(product) {
  if (product.price === null || product.price === undefined || product.price === '' || product.price === 0) {
    return 'Price on request';
  }
  const amount = '₹' + Number(product.price).toLocaleString('en-IN');
  return product.starting_from ? 'From ' + amount : amount;
}

function setText(id, text) {
  document.getElementById(id).textContent = text || '';
}

function fillSettings(s, wa) {
  if (s.announcement) {
    const bar = document.getElementById('announcement');
    bar.textContent = s.announcement;
    bar.hidden = false;
  }
  const brand = document.getElementById('brand');
  if (s.logo) brand.replaceChildren(el('img', { src: s.logo, alt: s.name }));
  else brand.textContent = s.name;

  setText('hero-title', s.hero_title || s.tagline);
  setText('hero-subtitle', s.hero_subtitle);
  setText('hero-cta', s.cta_text || 'Order on WhatsApp');
  const heroMedia = document.getElementById('hero-media');
  if (s.banner) {
    heroMedia.style.backgroundImage = `url("${s.banner}")`;
    heroMedia.classList.add('has-photo');
  } else {
    const gift = icon('gift');
    gift.setAttribute('class', 'hero-gift');
    heroMedia.append(gift);
  }

  setText('about-text', s.about);
  if (s.about_photo) {
    const photo = document.getElementById('about-photo');
    photo.src = s.about_photo;
    photo.alt = s.name;
    photo.hidden = false;
  }

  setText('area', s.area);
  setText('hours', s.hours);
  setText('footer-name', s.name);
  setText('year', new Date().getFullYear());

  const hello = `Hi ${s.name}! I'd like to order a gift.`;
  document.querySelectorAll('.wa-link').forEach(a => { a.href = whatsappLink(wa, hello); });
  const phone = indianNumber(s.phone);
  document.getElementById('call-link').href = phone ? 'tel:+' + phone : '#';
  if (s.instagram) {
    const insta = document.getElementById('insta-link');
    insta.href = s.instagram;
    insta.hidden = false;
  }
  if (s.name) document.title = `${s.name} – ${s.tagline || 'Handmade gift packing'}`;
}

function productCard(p, index, wa) {
  const tint = TINTS[index % TINTS.length];
  const photo = el('div', { class: 'card-photo', style: `--tint: ${tint}` });
  if (p.photo) photo.append(el('img', { src: p.photo, alt: p.name, loading: 'lazy' }));
  else photo.append(icon(iconFor(p.category || '')));

  const body = el('div', { class: 'card-body' },
    el('span', { class: 'card-tag' }, p.category || 'Gift'),
    el('h3', {}, p.name),
    el('span', { class: 'card-price' }, formatPrice(p)),
    el('p', { class: 'card-desc' }, p.description || ''),
    el('a', {
      class: 'btn btn-outline btn-small',
      href: whatsappLink(wa, `Hi! I'm interested in "${p.name}". Could you share the details?`),
      target: '_blank', rel: 'noopener'
    }, 'Ask on WhatsApp')
  );
  return el('article', {
    class: 'card reveal', 'data-category': p.category || '',
    style: `--delay: ${(index % 4) * 80}ms`
  }, photo, body);
}

function buildTiles(categories) {
  const tiles = document.getElementById('tiles');
  const all = ['All', ...categories];
  all.forEach((name, i) => {
    const button = el('button', { class: 'tile', type: 'button', 'aria-pressed': String(i === 0) },
      el('span', { class: 'tile-icon', style: `--tint: ${TINTS[i % TINTS.length]}` },
        icon(i === 0 ? 'all' : iconFor(name))),
      name);
    button.addEventListener('click', () => {
      tiles.querySelectorAll('.tile').forEach(t => t.setAttribute('aria-pressed', 'false'));
      button.setAttribute('aria-pressed', 'true');
      document.querySelectorAll('.card').forEach(card => {
        card.hidden = name !== 'All' && card.dataset.category !== name;
      });
      document.getElementById('gifts').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    tiles.append(button);
  });
  if (categories.length < 2) tiles.hidden = true; // no point filtering a single group
}

function startReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('in'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

async function load() {
  try {
    const [settings, data] = await Promise.all([
      fetch('content/settings.json').then(r => r.json()),
      fetch('content/products.json').then(r => r.json())
    ]);
    const wa = indianNumber(settings.whatsapp);
    fillSettings(settings, wa);

    const products = (data.products || []).filter(p => p.show);
    const grid = document.getElementById('grid');
    if (products.length) grid.append(...products.map((p, i) => productCard(p, i, wa)));
    else grid.append(el('p', { class: 'empty' }, 'New gifts coming soon. WhatsApp us to see the latest designs.'));

    buildTiles([...new Set(products.map(p => p.category).filter(Boolean))]);
  } catch (error) {
    console.error('Could not load content', error);
  }
  startReveal();
}

load();
