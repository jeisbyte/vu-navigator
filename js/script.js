/* ===========================================
   VU Navigator – Enhanced Script
   =========================================== */

// ─── ROOM DATABASE ───────────────────────────────────────────────
const ROOM_DB = [
  // Basement 2
  { id:'room-b201', room:'B201', name:'Free Study Room',      floor:'B2', floorClass:'basement', anchor:'../directions.html#room-b201' },
  { id:'dance',     room:'B202', name:'Dance Studio',         floor:'B2', floorClass:'basement', anchor:'../directions.html#dance' },
  { id:'room-b203', room:'B203', name:'Dance Studio (B203)',  floor:'B2', floorClass:'basement', anchor:'../directions.html#room-b203' },
  { id:'room-b204', room:'B204', name:'Free Study Room',      floor:'B2', floorClass:'basement', anchor:'../directions.html#room-b204' },
  { id:'room-b205', room:'B205', name:'Free Study Room',      floor:'B2', floorClass:'basement', anchor:'../directions.html#room-b205' },
  { id:'room-b206', room:'B206', name:'Free Study Room',      floor:'B2', floorClass:'basement', anchor:'../directions.html#room-b206' },
  { id:'custome',   room:'B207', name:'Changing / Costume Room', floor:'B2', floorClass:'basement', anchor:'../directions.html#custome' },
  { id:'music',     room:'B208', name:'Music Room',           floor:'B2', floorClass:'basement', anchor:'../directions.html#music' },
  { id:'mechanical-lab', room:'B209', name:'Mechanical Lab',  floor:'B2', floorClass:'basement', anchor:'../directions.html#mechanical-lab' },
  { id:'room-b210', room:'B210', name:'Free Study Room',      floor:'B2', floorClass:'basement', anchor:'../directions.html#room-b210' },
  // Basement 1
  { id:'room-b101', room:'B101', name:'Study Room',           floor:'B1', floorClass:'basement', anchor:'../directions.html#room-b101' },
  { id:'room-b102', room:'B102', name:'Study Room',           floor:'B1', floorClass:'basement', anchor:'../directions.html#room-b102' },
  { id:'room-b103', room:'B103', name:'Study Room',           floor:'B1', floorClass:'basement', anchor:'../directions.html#room-b103' },
  { id:'staff',     room:'B104', name:"Staff Office",         floor:'B1', floorClass:'basement', anchor:'../directions.html#staff' },
  { id:'registration', room:'B105', name:'Registration Office', floor:'B1', floorClass:'basement', anchor:'../directions.html#registration' },
  { id:'room-b106', room:'B106', name:'Study Room',           floor:'B1', floorClass:'basement', anchor:'../directions.html#room-b106' },
  { id:'principal-office', room:'B107', name:"Principal's Office", floor:'B1', floorClass:'basement', anchor:'../directions.html#principal-office' },
  { id:'room-b108', room:'B108', name:'Study Room',           floor:'B1', floorClass:'basement', anchor:'../directions.html#room-b108' },
  { id:'room-b109', room:'B109', name:'Study Room',           floor:'B1', floorClass:'basement', anchor:'../directions.html#room-b109' },
  { id:'room-b110', room:'B110', name:'Study Room',           floor:'B1', floorClass:'basement', anchor:'../directions.html#room-b110' },
  { id:'room-b111', room:'B111', name:'Study Room',           floor:'B1', floorClass:'basement', anchor:'../directions.html#room-b111' },
  // Ground Floor
  { id:'reception',   room:'Reception', name:'Reception',              floor:'G', floorClass:'ground', anchor:'../directions.html#reception' },
  { id:'art-gallery', room:'G01',       name:'Art Gallery',            floor:'G', floorClass:'ground', anchor:'../directions.html#art-gallery' },
  { id:'student-support-office', room:'G02', name:'Student Support Office', floor:'G', floorClass:'ground', anchor:'../directions.html#student-support-office' },
  { id:'marketing-office', room:'G03',  name:'Marketing Office',       floor:'G', floorClass:'ground', anchor:'../directions.html#marketing-office' },
  { id:'cooperative-education-office', room:'G04', name:'Co-operative Education Office (CEO)', floor:'G', floorClass:'ground', anchor:'../directions.html#cooperative-education-office' },
  { id:'university-administrator', room:'G05', name:'University Administrator', floor:'G', floorClass:'ground', anchor:'../directions.html#university-administrator' },
  { id:'vu-law-clinic', room:'G06',     name:'VU Law Clinic',          floor:'G', floorClass:'ground', anchor:'../directions.html#vu-law-clinic' },
  // Floor 1
  { id:'room-101', room:'101', name:'Staff Office', floor:'1', anchor:'../directions.html#room-101' },
  { id:'room-102', room:'102', name:'Staff Office', floor:'1', anchor:'../directions.html#room-102' },
  { id:'room-103', room:'103', name:'Staff Office', floor:'1', anchor:'../directions.html#room-103' },
  { id:'room-104', room:'104', name:'Staff Office', floor:'1', anchor:'../directions.html#room-104' },
  { id:'room-105', room:'105', name:'Staff Office', floor:'1', anchor:'../directions.html#room-105' },
  { id:'room-106', room:'106', name:'Staff Office', floor:'1', anchor:'../directions.html#room-106' },
  { id:'room-107', room:'107', name:'Staff Office', floor:'1', anchor:'../directions.html#room-107' },
  { id:'room-108', room:'108', name:'Staff Office', floor:'1', anchor:'../directions.html#room-108' },
  { id:'room-109', room:'109', name:'Staff Office', floor:'1', anchor:'../directions.html#room-109' },
  { id:'room-110', room:'110', name:'Staff Office', floor:'1', anchor:'../directions.html#room-110' },
  { id:'room-111', room:'111', name:'Staff Office', floor:'1', anchor:'../directions.html#room-111' },
  { id:'room-112', room:'112', name:'Staff Office', floor:'1', anchor:'../directions.html#room-112' },
  { id:'room-113', room:'113', name:'Staff Office', floor:'1', anchor:'../directions.html#room-113' },
  { id:'room-114', room:'114', name:'Staff Office', floor:'1', anchor:'../directions.html#room-114' },
  { id:'room-115', room:'115', name:'Study Room', floor:'1', anchor:'../directions.html#room-115' },
  { id:'room-116', room:'116', name:'Study Room', floor:'1', anchor:'../directions.html#room-116' },
  { id:'room-117', room:'117', name:'Study Room', floor:'1', anchor:'../directions.html#room-117' },
  { id:'room-118', room:'118', name:'Study Room', floor:'1', anchor:'../directions.html#room-118' },
  { id:'room-119', room:'119', name:'Study Room', floor:'1', anchor:'../directions.html#room-119' },
  { id:'room-120', room:'120', name:'Study Room', floor:'1', anchor:'../directions.html#room-120' },
  { id:'room-121', room:'121', name:'Study Room', floor:'1', anchor:'../directions.html#room-121' },
  { id:'room-122', room:'122', name:'Study Room', floor:'1', anchor:'../directions.html#room-122' },
  { id:'room-123', room:'123', name:'Study Room', floor:'1', anchor:'../directions.html#room-123' },
  { id:'room-124', room:'124', name:'Study Room', floor:'1', anchor:'../directions.html#room-124' },
  { id:'room-125', room:'125', name:'Study Room', floor:'1', anchor:'../directions.html#room-125' },
  { id:'room-127', room:'127', name:'Study Room', floor:'1', anchor:'../directions.html#room-127' },
  // Floor 2
  { id:'cosmetic-lab', room:'201', name:'Cosmetic Lab',    floor:'2', anchor:'../directions.html#cosmetic-lab' },
  { id:'ict-lab-1',    room:'202', name:'ICT Lab 1',       floor:'2', anchor:'../directions.html#ICT-Lab-1' },
  { id:'room-203',     room:'203', name:'Study Room',      floor:'2', anchor:'../directions.html#room-203' },
  { id:'room-204',     room:'204', name:'Study Room',      floor:'2', anchor:'../directions.html#room-204' },
  { id:'room-205',     room:'205', name:'Study Room',      floor:'2', anchor:'../directions.html#room-205' },
  { id:'room-206',     room:'206', name:'Study Room',      floor:'2', anchor:'../directions.html#room-206' },
  { id:'room-207',     room:'207', name:'Boardroom 1',     floor:'2', anchor:'../directions.html#room-207' },
  { id:'room-208',     room:'208', name:'Boardroom 2',     floor:'2', anchor:'../directions.html#room-208' },
  { id:'room-209',     room:'209', name:'Boardroom 3',     floor:'2', anchor:'../directions.html#room-209' },
  { id:'room-210',     room:'210', name:'Storage Room',    floor:'2', anchor:'../directions.html#room-210' },
  // Floor 3
  { id:'room-301', room:'301', name:'Study Room',                    floor:'3', anchor:'../directions.html#room-301' },
  { id:'room-302', room:'302', name:'Public Health Laboratory',      floor:'3', anchor:'../directions.html#room-302' },
  { id:'room-303', room:'303', name:'H.O.D Food & Nutrition',        floor:'3', anchor:'../directions.html#room-303' },
  { id:'room-304', room:'304', name:'Pharmacy Department Units',     floor:'3', anchor:'../directions.html#room-304' },
  { id:'room-305', room:'305', name:'H.O.D Pharmacy',               floor:'3', anchor:'../directions.html#room-305' },
  { id:'room-306', room:'306', name:'Dean Faculty of Health Science',floor:'3', anchor:'../directions.html#room-306' },
  { id:'sick-bay', room:'307', name:'Sick Bay',                      floor:'3', anchor:'../directions.html#sick-bay' },
  { id:'room-308', room:'308', name:'H.O.D Nursing & Midwifery',    floor:'3', anchor:'../directions.html#room-308' },
  { id:'anatomy-lab',   room:'—',  name:'Anatomy Laboratory',       floor:'3', anchor:'../directions.html#anatomy-lab' },
  { id:'nutrition-lab', room:'—',  name:'Nutrition Laboratory',     floor:'3', anchor:'../directions.html#nutrition-lab' },
  { id:'skills-lab',    room:'—',  name:'Skills Laboratory',        floor:'3', anchor:'../directions.html#skills-lab' },
  { id:'art-room',      room:'—',  name:'Art Room',                 floor:'3', anchor:'../directions.html#art-room' },
  // Floor 5
  { id:'room-501', room:'501', name:'Laboratory 1',              floor:'5', anchor:'../directions.html#room-501' },
  { id:'room-502', room:'502', name:'Laboratory 2',              floor:'5', anchor:'../directions.html#room-502' },
  { id:'engineering-graphics-design', room:'503', name:'Engineering & Graphics Design', floor:'5', anchor:'../directions.html#engineering-graphics-design' },
  // Floor 6
  { id:'guild-office',    room:'—',  name:'Guild Office',                    floor:'6', anchor:'../directions.html#guild-office' },
  { id:'server',          room:'—',  name:'Server Room',                     floor:'6', anchor:'../directions.html#server' },
  { id:'computer-lab-1',  room:'—',  name:'Computer Lab 1',                  floor:'6', anchor:'../directions.html#computer-lab-1' },
  { id:'dean-institute',  room:'—',  name:'Dean Institute',                  floor:'6', anchor:'../directions.html#dean-institute' },
  { id:'executive-assistant', room:'—', name:'Executive Assistant & H.O.D Education', floor:'6', anchor:'../directions.html#executive-assistant' },
  // Floor 7
  { id:'room-701',  room:'7-01', name:'Multimedia Studio',            floor:'7', anchor:'../directions.html#room-701' },
  { id:'room-702',  room:'7-02', name:'Film / Sound Studio',          floor:'7', anchor:'../directions.html#room-702' },
  { id:'hod-film-production', room:'—', name:'H.O.D TV Radio & Film Production', floor:'7', anchor:'../directions.html#hod-film-production' },
  { id:'room-703',  room:'7-03', name:'Moot Court',                   floor:'7', anchor:'../directions.html#room-703' },
  { id:'room-704',  room:'7-04', name:'Room 7-04',                    floor:'7', anchor:'../directions.html#room-704' },
  { id:'room-705',  room:'7-05', name:'Room 7-05',                    floor:'7', anchor:'../directions.html#room-705' },
  { id:'room-706',  room:'7-06', name:'Room 7-06',                    floor:'7', anchor:'../directions.html#room-706' },
  { id:'room-708',  room:'7-08', name:'Law School Board Room & Staff Lounge', floor:'7', anchor:'../directions.html#room-708' },
  { id:'office-registrar-law',  room:'—', name:'Office of Registrar – School of Law', floor:'7', anchor:'../directions.html#office-registrar-law' },
  { id:'office-associate-dean', room:'—', name:'Office of Associate Dean',   floor:'7', anchor:'../directions.html#office-associate-dean' },
  { id:'office-dean',           room:'—', name:'Office of the Dean',         floor:'7', anchor:'../directions.html#office-dean' },
  // Floor 8
  { id:'room-801', room:'8-01', name:'Room 8-01', floor:'8', anchor:'../directions.html#room-801' },
  { id:'room-802', room:'8-02', name:'Room 8-02', floor:'8', anchor:'../directions.html#room-802' },
  { id:'room-803', room:'8-03', name:'Room 8-03', floor:'8', anchor:'../directions.html#room-803' },
  { id:'room-804', room:'8-04', name:'Room 8-04', floor:'8', anchor:'../directions.html#room-804' },
  { id:'room-805', room:'8-05', name:'Room 8-05', floor:'8', anchor:'../directions.html#room-805' },
  { id:'room-806', room:'8-06', name:'Room 8-06', floor:'8', anchor:'../directions.html#room-806' },
  { id:'room-807', room:'8-07', name:'Room 8-07', floor:'8', anchor:'../directions.html#room-807' },
  { id:'room-808', room:'8-08', name:'Room 8-08', floor:'8', anchor:'../directions.html#room-808' },
  { id:'room-809', room:'8-09', name:'Room 8-09', floor:'8', anchor:'../directions.html#room-809' },
  { id:'room-810', room:'8-10', name:'Room 8-10', floor:'8', anchor:'../directions.html#room-810' },
  { id:'vice-chancellor',  room:'—', name:"Vice Chancellor's Coordination Office", floor:'8', anchor:'../directions.html#vice-chancellor' },
  { id:'quality-assurance',room:'—', name:'Quality Assurance Office',       floor:'8', anchor:'../directions.html#quality-assurance' },
  // Floor 9
  { id:'cafeteria',     room:'901', name:'Cafeteria',          floor:'9', anchor:'../directions.html#cafeteria' },
  { id:'room-902',      room:'902', name:'Library',            floor:'9', anchor:'../directions.html#room-902' },
  { id:'computer-lab-2',room:'903', name:'Editing Suite/ Computer lab 2', aliases:['Editting Suite/ Computer lab 2', 'Editing Suite', 'Editting Suite', 'Computer Lab 2', 'Computer lab 2'], floor:'9', anchor:'../directions.html#computer-lab-2' },
  { id:'room-904',      room:'904', name:'IT Room',            floor:'9', anchor:'../directions.html#room-904' },
  { id:'room-905',      room:'905', name:'Silent Room 1',      floor:'9', anchor:'../directions.html#room-905' },
  { id:'room-906',      room:'906', name:'Silent Room 2',      floor:'9', anchor:'../directions.html#room-906' },
  { id:'room-907',      room:'907', name:'Law Society Office', floor:'9', anchor:'../directions.html#room-907' },
  { id:'room-908',      room:'908', name:'Program Administrators', floor:'9', anchor:'../directions.html#room-908' },
  { id:'room-909',      room:'909', name:'Meeting Room 1',     floor:'9', anchor:'../directions.html#room-909' },
  { id:'room-910',      room:'910', name:'Meeting Room 2',     floor:'9', anchor:'../directions.html#room-910' },
];

// ─── SEARCH ENGINE ────────────────────────────────────────────────
function initSearch() {
  const input   = document.getElementById('globalSearch');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  let highlighted = -1;
  let filtered    = [];

  function floorLabel(r) {
    if (r.floorClass === 'basement') return `B${r.floor.replace('B','')}`;
    if (r.floorClass === 'ground')   return 'G';
    return `Fl ${r.floor}`;
  }

  function render(items) {
    filtered = items;
    highlighted = -1;
    if (!items.length) {
      results.innerHTML = '<div class="search-no-results">No rooms found. Try a room number or name.</div>';
      results.classList.add('open');
      return;
    }
    const isSubdir = window.location.pathname.includes('/floors/') || window.location.pathname.includes('\\floors\\');
    const targetBase = isSubdir ? '../directions.html' : './directions.html';
    results.innerHTML = items.slice(0, 12).map((r, i) => `
      <a class="search-result-item" href="${targetBase}#${r.id}" data-idx="${i}">
        <span class="search-result-floor ${r.floorClass || ''}">${floorLabel(r)}</span>
        <div class="search-result-info">
          <div class="search-result-name">${r.name}</div>
          <div class="search-result-desc">Room ${r.room} · Floor ${r.floor}</div>
        </div>
        <span class="search-result-go">Go →</span>
      </a>`).join('');
    results.classList.add('open');
  }

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.classList.remove('open'); return; }
    const qNorm = q.replace(/tt/g, 't');
    const matches = ROOM_DB.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.name.toLowerCase().replace(/tt/g, 't').includes(qNorm) ||
      r.room.toLowerCase().includes(q) ||
      r.floor.toLowerCase().includes(q) ||
      r.id.toLowerCase().includes(q) ||
      (r.aliases && r.aliases.some(a => a.toLowerCase().includes(q) || a.toLowerCase().replace(/tt/g, 't').includes(qNorm)))
    );
    render(matches);
  });

  // Keyboard navigation
  input.addEventListener('keydown', (e) => {
    const items = results.querySelectorAll('.search-result-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      highlighted = Math.min(highlighted + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('highlighted', i === highlighted));
      if (items[highlighted]) items[highlighted].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      highlighted = Math.max(highlighted - 1, 0);
      items.forEach((el, i) => el.classList.toggle('highlighted', i === highlighted));
      if (items[highlighted]) items[highlighted].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      if (highlighted >= 0 && items[highlighted]) {
        items[highlighted].click();
      }
    } else if (e.key === 'Escape') {
      results.classList.remove('open');
    }
  });

  // Close when clicking outside or clicking an item
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper, .header-search-wrapper')) {
      results.classList.remove('open');
    }
  });
  results.addEventListener('click', (e) => {
    if (e.target.closest('.search-result-item')) {
      results.classList.remove('open');
    }
  });
}

// ─── MAP / LIST TOGGLE ────────────────────────────────────────────
function initToggle() {
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      const section = btn.closest('.floor-plan-section');
      if (!section) return;
      section.querySelectorAll('.toggle-btn').forEach(b => b.classList.toggle('active', b === btn));
      const map  = section.querySelector('.svg-map-container');
      const list = section.querySelector('.list-view');
      if (view === 'map') {
        if (map)  map.classList.remove('hidden');
        if (list) list.classList.add('hidden');
      } else {
        if (map)  map.classList.add('hidden');
        if (list) list.classList.remove('hidden');
      }
    });
  });
}

// ─── HIGHLIGHT CARD ON ANCHOR NAVIGATION ─────────────────────────
let _activeHighlight = null;
let _highlightObserver = null;

function triggerHighlight(hash) {
  if (!hash) return;
  const target = document.querySelector(hash);
  if (target && target.classList.contains('direction-card')) {
    // Remove any previous highlight
    if (_activeHighlight && _activeHighlight !== target) {
      _activeHighlight.classList.remove('highlighted');
    }
    if (_highlightObserver) {
      _highlightObserver.disconnect();
      _highlightObserver = null;
    }

    target.classList.add('highlighted');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    _activeHighlight = target;

    // Remove highlight only when the card scrolls out of view
    _highlightObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          target.classList.remove('highlighted');
          _highlightObserver.disconnect();
          _highlightObserver = null;
          _activeHighlight = null;
        }
      });
    }, { threshold: 0.05 });
    _highlightObserver.observe(target);
  }
}

function initAnchorHighlight() {
  if (window.location.hash) {
    setTimeout(() => triggerHighlight(window.location.hash), 200);
  }
  window.addEventListener('hashchange', () => {
    triggerHighlight(window.location.hash);
  });
}

// ─── LIGHTBOX ────────────────────────────────────────────────────
function initLightbox() {
  if (!document.querySelector('.lightbox')) {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="close" aria-label="Close">&times;</button><img src="" alt="Full screen view">';
    document.body.appendChild(lb);
  }
  const lightbox    = document.querySelector('.lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn    = lightbox.querySelector('.close');

  document.querySelectorAll('.room-image, .room-image2').forEach(img => {
    img.addEventListener('click', e => {
      e.stopPropagation();
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  };
  lightbox.addEventListener('click', closeLightbox);
  closeBtn.addEventListener('click', e => { e.stopPropagation(); closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') closeLightbox();
  });
}

// ─── SCROLL FADE-IN ───────────────────────────────────────────────
function initFadeIn() {
  const els = document.querySelectorAll(
    '.direction-card, .room-card, .floor-heading, .quick-index, .directions-intro, .building-info, .hero-search-section, .floor-grid, .svg-map-container, .quick-actions-section, .action-card, .info-card, .facility-card'
  );
  els.forEach(el => el.classList.add('fade-up'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ─── STICKY COMPACT HEADER ────────────────────────────────────────
function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;
  const THRESHOLD = 60; // px scrolled before compacting
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > THRESHOLD);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case page is already scrolled
}

// ─── BACK TO TOP BUTTON ───────────────────────────────────────────
function initBackToTop() {
  // Create the button
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '↑';
  document.body.appendChild(btn);

  // Show/hide based on scroll position
  const SHOW_THRESHOLD = 400;
  function onScroll() {
    btn.classList.toggle('visible', window.scrollY > SHOW_THRESHOLD);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll to top on click
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── BOOT ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSearch();
  initToggle();
  initAnchorHighlight();
  initLightbox();
  initFadeIn();
  initStickyHeader();
  initBackToTop();
});