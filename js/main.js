/* ==========================================================
   Hocking Hills Retreat — site scripts
   Edit the PARKS and RESTAURANTS lists below to update content.
   ========================================================== */

const HOME_ADDRESS = '12300 Maysville Williams Rd, Logan, OH 43138';

/* Google Maps turn-by-turn directions from the house to a destination. */
function directionsUrl(destination) {
  const params = new URLSearchParams({
    api: '1',
    origin: HOME_ADDRESS,
    destination,
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

/* Google Maps search link for a place. */
function mapUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/* ---------- Hocking Hills State Park areas ---------- */
const PARKS = [
  {
    name: "Old Man's Cave",
    location: '19852 State Route 664 S, Logan, OH 43138',
    mapsQuery: "Old Man's Cave Visitor Center, 19852 OH-664, Logan, OH 43138",
    description:
      'The park\'s most popular area: Upper & Lower Falls, the Devil\'s Bathtub, and a recess cave in a deep gorge. Home of the main Visitor Center.',
    trail: '~1 mile gorge loop · moderate, many stairs',
  },
  {
    name: 'Cedar Falls',
    location: 'Cedar Falls Rd (off State Route 374), Logan, OH 43138',
    mapsQuery: 'Cedar Falls, Hocking Hills State Park, Logan, OH',
    description:
      'The largest waterfall by volume in the park, framed by hemlocks. Connects to Old Man\'s Cave and Ash Cave via the Grandma Gatewood Trail.',
    trail: '~0.5 mile loop · moderate, stairs',
  },
  {
    name: 'Ash Cave',
    location: 'State Route 56, South Bloomingville, OH 43152',
    mapsQuery: 'Ash Cave, Hocking Hills State Park, OH',
    description:
      'A massive horseshoe-shaped recess cave with a seasonal waterfall. The gorge trail is flat and wheelchair accessible.',
    trail: '~0.5 mile · easy, accessible',
  },
  {
    name: "Conkle's Hollow State Nature Preserve",
    location: 'Big Pine Rd (off State Route 374), Rockbridge, OH 43149',
    mapsQuery: "Conkle's Hollow State Nature Preserve, Rockbridge, OH",
    description:
      'One of the deepest gorges in Ohio. Choose the paved gorge trail or the rim trail with sweeping overlooks.',
    trail: 'Gorge 1 mi (easy, paved) · Rim 2.5 mi (difficult)',
  },
  {
    name: 'Rock House',
    location: 'State Route 374, Laurelville, OH 43135',
    mapsQuery: 'Rock House, Hocking Hills State Park, OH',
    description:
      'The only true cave in the park — a tunnel-like corridor in a sandstone cliff with Gothic "windows" and a colorful history.',
    trail: '~1 mile loop · moderate, steep in places',
  },
  {
    name: 'Cantwell Cliffs',
    location: 'State Route 374, Rockbridge, OH 43149',
    mapsQuery: 'Cantwell Cliffs, Hocking Hills State Park, OH',
    description:
      'The most remote area of the park with 150-foot cliffs, a recess cave, and the tight squeeze of "Fat Woman\'s Squeeze."',
    trail: '~2 mile loop · difficult',
  },
  {
    name: 'Lake Logan State Park',
    location: '30443 Lake Logan Rd, Logan, OH 43138',
    mapsQuery: 'Lake Logan State Park, Logan, OH',
    description:
      'A 300+ acre lake for fishing, kayaking and paddleboarding, with a beach, picnic areas and boat rentals in season.',
    trail: 'Lake access · easy',
  },
];

/* ---------- Local restaurants ----------
   area: 'logan' | 'hocking' | 'nearby'
   Verify hours before visiting — many places are seasonal. */
const RESTAURANTS = [
  {
    name: 'Millstone Southern Smoked BBQ',
    town: 'Logan',
    area: 'logan',
    type: 'BBQ · Casual',
    description: 'Slow-smoked brisket, pulled pork and ribs with classic Southern sides.',
  },
  {
    name: 'Olde Dutch Restaurant',
    town: 'Logan',
    area: 'logan',
    type: 'Family Style · Buffet',
    description: 'Home-style comfort food and a big buffet — a local staple near US-33.',
  },
  {
    name: 'Hocking Hills Coffee Emporium',
    town: 'Logan',
    area: 'logan',
    type: 'Coffee · Breakfast',
    description: 'Downtown Logan coffee shop for espresso, pastries and a pre-hike breakfast.',
  },
  {
    name: 'Hocking Hills Winery',
    town: 'Logan',
    area: 'logan',
    type: 'Winery · Light Bites',
    description: 'Local wines and tastings with a relaxed patio — a great end to a trail day.',
  },
  {
    name: 'Hocking Hills Moonshine',
    town: 'Logan',
    area: 'logan',
    type: 'Distillery · Tastings',
    description: 'Small-batch moonshine tastings and a fun stop for the adults in the group.',
  },
  {
    name: 'The Inn & Spa at Cedar Falls',
    town: 'Logan (Cedar Falls)',
    area: 'hocking',
    type: 'Farm-to-Table · Upscale',
    description: 'Seasonal menus served in restored 1840s log cabins, minutes from Cedar Falls.',
  },
  {
    name: 'Hocking Hills State Park Lodge',
    town: "Logan (Old Man's Cave)",
    area: 'hocking',
    type: 'American · Lodge Dining',
    description: 'Lodge restaurant inside the park — convenient for lunch between hikes.',
  },
  {
    name: 'Glenlaurel Inn',
    town: 'Rockbridge',
    area: 'hocking',
    type: 'Fine Dining · Reservations',
    description: 'A Scottish-style country inn known for multi-course dinners. Reservations required.',
  },
  {
    name: "Etta's Lunchbox Cafe",
    town: 'New Plymouth',
    area: 'hocking',
    type: 'Cafe · Quirky',
    description: 'Pizza, sandwiches and desserts in a former general store filled with vintage lunchboxes.',
  },
  {
    name: 'Rhapsody Music & Dining',
    town: 'Nelsonville',
    area: 'nearby',
    type: 'American · Live Music',
    description: 'Creative American dishes and live music on the historic Nelsonville square.',
  },
  {
    name: 'Lake Hope Lodge',
    town: 'McArthur (Lake Hope State Park)',
    area: 'nearby',
    type: 'American · Lodge Dining',
    description: 'Lakeside lodge dining in neighboring Lake Hope State Park.',
  },
  {
    name: "Shaw's Restaurant & Inn",
    town: 'Lancaster',
    area: 'nearby',
    type: 'Steaks · Seafood',
    description: 'Long-running Lancaster favorite for steaks, seafood and a classic bar.',
  },
];

/* ---------- Render helpers ---------- */
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'className') node.className = value;
    else node.setAttribute(key, value);
  }
  for (const child of children) {
    if (child == null) continue;
    node.append(child);
  }
  return node;
}

function linkBtn(href, label, extraClass = '') {
  return el('a', { href, target: '_blank', rel: 'noopener', className: `btn btn-small ${extraClass}`.trim() }, label);
}

function renderParks() {
  const list = document.getElementById('parks-list');
  if (!list) return;
  PARKS.forEach((park) => {
    list.append(
      el('article', { className: 'card' },
        el('h3', {}, park.name),
        el('p', { className: 'card-meta' }, park.location),
        el('p', {}, park.description),
        el('p', { className: 'card-tag' }, park.trail),
        el('div', { className: 'card-actions' },
          linkBtn(directionsUrl(park.mapsQuery), 'Directions from the house'),
          linkBtn(mapUrl(park.mapsQuery), 'View map', 'btn-outline'),
        ),
      ),
    );
  });
}

function renderRestaurants() {
  const list = document.getElementById('dining-list');
  if (!list) return;
  RESTAURANTS.forEach((r) => {
    const query = `${r.name}, ${r.town.replace(/\s*\(.*\)/, '')}, OH`;
    list.append(
      el('article', { className: 'card', 'data-area': r.area },
        el('p', { className: 'card-tag' }, r.type),
        el('h3', {}, r.name),
        el('p', { className: 'card-meta' }, `${r.town}, Ohio`),
        el('p', {}, r.description),
        el('div', { className: 'card-actions' },
          linkBtn(directionsUrl(query), 'Directions'),
          linkBtn(mapUrl(query), 'Hours & reviews', 'btn-outline'),
        ),
      ),
    );
  });

  document.querySelectorAll('.filter-bar .chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-bar .chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      list.querySelectorAll('.card').forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.area !== filter;
      });
    });
  });
}

/* ---------- Mobile nav ---------- */
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }),
  );
}

/* ---------- Request form ---------- */
function toISODate(d) {
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
}

function initForm() {
  const form = document.getElementById('request-form');
  if (!form) return;

  const checkIn = document.getElementById('check-in');
  const checkOut = document.getElementById('check-out');
  const errorBox = document.getElementById('form-error');
  const next = document.getElementById('next-url');

  // Redirect back to our own thank-you page after FormSubmit processes the request.
  next.value = new URL('thank-you.html', window.location.href).href;

  const today = toISODate(new Date());
  checkIn.min = today;
  checkOut.min = today;
  checkIn.addEventListener('change', () => {
    if (!checkIn.value) return;
    const minOut = new Date(`${checkIn.value}T00:00:00`);
    minOut.setDate(minOut.getDate() + 1);
    checkOut.min = toISODate(minOut);
    if (checkOut.value && checkOut.value <= checkIn.value) checkOut.value = '';
  });

  form.addEventListener('submit', (e) => {
    const errors = [];
    if (!form.name.value.trim()) errors.push('Please enter your name.');
    if (!form.email.validity.valid || !form.email.value) errors.push('Please enter a valid email address.');
    if (!form.guests.value) errors.push('Please select the number of guests.');
    if (!checkIn.value || !checkOut.value) errors.push('Please choose check-in and check-out dates.');
    else if (checkOut.value <= checkIn.value) errors.push('Check-out must be after check-in.');
    else if (checkIn.value < today) errors.push('Check-in cannot be in the past.');

    if (errors.length) {
      e.preventDefault();
      errorBox.textContent = errors.join(' ');
      errorBox.hidden = false;
      return;
    }
    errorBox.hidden = true;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderParks();
  renderRestaurants();
  initNav();
  initForm();
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
