/**
 * Mahmoud Khattab - Egyptian Tour Guide Main Application
 * UI/UX Pro Max Edition: Multilingual Engine, Custom VIP Trip Builder, Dynamic Renderers & Lightbox
 */

let currentLang = 'ru'; // Default to Russian
let selectedVenues = new Set();
let currentMediaIndex = 0;
let currentFilteredMedia = [];
let heroGalleryIndex = 0;

// Captions are intentionally grounded in what is visibly shown in each image.
// Where a precise monument cannot be verified from the photograph alone, the
// copy stays descriptive instead of claiming a specific site.
const AUTHENTIC_MEDIA_COPY = {
  'pic-05': { title: { ru: 'Читаем историю на стенах храма', en: 'Reading history on the temple walls', zh: '从神庙墙壁读懂历史' }, location: { ru: 'Верхний Египет', en: 'Upper Egypt', zh: '上埃及' } },
  'pic-07': { title: { ru: 'День у пирамид вместе с гостями', en: 'A day at the pyramids with our guests', zh: '与客人共游金字塔' }, location: { ru: 'Плато Гиза', en: 'Giza Plateau', zh: '吉萨高地' } },
  'pic-08': { title: { ru: 'Небольшая пауза между открытиями', en: 'A relaxed break between discoveries', zh: '旅途中的轻松时刻' }, location: { ru: 'Египет', en: 'Egypt', zh: '埃及' } },
  'pic-09': { title: { ru: 'Внутри расписной древней гробницы', en: 'Inside an ancient painted tomb', zh: '走进彩绘古墓' }, location: { ru: 'Западный берег Луксора', en: 'Luxor West Bank', zh: '卢克索西岸' } },
  'pic-10': { title: { ru: 'История оживает в рассказе гида', en: 'History brought to life by your guide', zh: '让历史在讲解中鲜活起来' }, location: { ru: 'Верхний Египет', en: 'Upper Egypt', zh: '上埃及' } },
  'pic-11': { title: { ru: 'Вместе во дворе древнего храма', en: 'Together in an ancient temple courtyard', zh: '共游古老神庙庭院' }, location: { ru: 'Верхний Египет', en: 'Upper Egypt', zh: '上埃及' } },
  'pic-12': { title: { ru: 'Между памятниками древнего Египта', en: 'Between the monuments of ancient Egypt', zh: '穿行在古埃及遗迹之间' }, location: { ru: 'Египет', en: 'Egypt', zh: '埃及' } },
  'pic-13': { title: { ru: 'У ворот древнего храма', en: 'At the gates of an ancient temple', zh: '古老神庙门前' }, location: { ru: 'Верхний Египет', en: 'Upper Egypt', zh: '上埃及' } },
  'pic-14': { title: { ru: 'Среди колонн и тысячелетних историй', en: 'Among columns and stories thousands of years old', zh: '在古老石柱与千年故事之间' }, location: { ru: 'Верхний Египет', en: 'Upper Egypt', zh: '上埃及' } },
  'pic-15': { title: { ru: 'Встреча с колоссами Рамсеса II', en: 'Meeting the colossi of Ramesses II', zh: '仰望拉美西斯二世巨像' }, location: { ru: 'Абу-Симбел', en: 'Abu Simbel', zh: '阿布辛贝' } },
  'pic-17': { title: { ru: 'Истории, высеченные в камне', en: 'Stories carved and painted in stone', zh: '刻画在石壁上的故事' }, location: { ru: 'Верхний Египет', en: 'Upper Egypt', zh: '上埃及' } },
  'pic-19': { title: { ru: 'Следующая глава путешествия', en: 'The next chapter of the journey', zh: '开启旅程的下一站' }, location: { ru: 'Железнодорожный вокзал Луксора', en: 'Luxor Railway Station', zh: '卢克索火车站' } },
  'pic-20': { title: { ru: 'Террасы царицы Хатшепсут', en: 'The terraces of Queen Hatshepsut', zh: '哈特谢普苏特女王神庙台地' }, location: { ru: 'Дейр-эль-Бахри, Луксор', en: 'Deir el-Bahari, Luxor', zh: '卢克索代尔巴哈里' } },
  'pic-21': { title: { ru: 'В священной комнате древнего храма', en: 'Inside a sacred ancient temple chamber', zh: '走进古老神庙的圣室' }, location: { ru: 'Верхний Египет', en: 'Upper Egypt', zh: '上埃及' } },
  'pic-22': { title: { ru: 'Средиземноморский день в Александрии', en: 'A Mediterranean day in Alexandria', zh: '亚历山大的地中海时光' }, location: { ru: 'Мост Стэнли, Александрия', en: 'Stanley Bridge, Alexandria', zh: '亚历山大斯坦利桥' } },
  'pic-23': { title: { ru: 'На стенах цитадели у моря', en: 'On the citadel walls by the sea', zh: '海边城堡之上' }, location: { ru: 'Цитадель Кайт-Бей, Александрия', en: 'Qaitbay Citadel, Alexandria', zh: '亚历山大盖特贝城堡' } },
  'pic-24': { title: { ru: 'Прогулка по колоритному восточному рынку', en: 'Walking through a colorful Egyptian market', zh: '漫步充满色彩的埃及市集' }, location: { ru: 'Египет', en: 'Egypt', zh: '埃及' } },
  'pic-25': { title: { ru: 'Личная экскурсия среди шедевров фараонов', en: 'A private tour among pharaonic masterpieces', zh: '在法老珍宝间的私人讲解' }, location: { ru: 'Египетский музей, Каир', en: 'Egyptian Museum, Cairo', zh: '开罗埃及博物馆' } },
  'pic-26': { title: { ru: 'Частная экскурсия у Сфинкса и пирамид', en: 'A private visit to the Sphinx and pyramids', zh: '狮身人面像与金字塔私人之旅' }, location: { ru: 'Плато Гиза', en: 'Giza Plateau', zh: '吉萨高地' } },
  'pic-27': { title: { ru: 'Разговор о римской Александрии', en: 'Discovering Roman Alexandria', zh: '探寻罗马时代的亚历山大' }, location: { ru: 'Ком-эль-Дикка, Александрия', en: 'Kom el-Dikka, Alexandria', zh: '亚历山大考姆迪卡' } }
};

const AUTHENTIC_MEDIA_CATEGORY = {
  'pic-05': 'luxor-aswan', 'pic-07': 'pyramids', 'pic-08': 'cairo',
  'pic-09': 'luxor-aswan', 'pic-10': 'luxor-aswan', 'pic-11': 'luxor-aswan',
  'pic-12': 'pyramids', 'pic-13': 'luxor-aswan', 'pic-14': 'luxor-aswan',
  'pic-15': 'luxor-aswan', 'pic-17': 'luxor-aswan',
  'pic-19': 'luxor-aswan', 'pic-20': 'luxor-aswan',
  'pic-21': 'luxor-aswan', 'pic-22': 'cairo', 'pic-23': 'cairo',
  'pic-24': 'cairo', 'pic-25': 'cairo', 'pic-26': 'pyramids', 'pic-27': 'cairo'
};

const SUPPLEMENTAL_MEDIA = [
  { type: 'photo', id: 'pic-01', src: 'assets/photos/photo_01.jpg', category: 'pyramids', title: { ru: 'С гостями у Великой пирамиды', en: 'With guests beside the Great Pyramid', zh: '与客人相聚大金字塔旁' }, location: { ru: 'Гиза', en: 'Giza', zh: '吉萨' } },
  { type: 'photo', id: 'pic-04', src: 'assets/photos/photo_04.jpg', category: 'luxor-aswan', title: { ru: 'Путешествие по храмам юга', en: 'A journey through the temples of the south', zh: '探访埃及南部神庙' }, location: { ru: 'Асуан', en: 'Aswan', zh: '阿斯旺' } },
  { type: 'photo', id: 'pic-06', src: 'assets/photos/photo_06.jpg', category: 'safari', title: { ru: 'Живые моменты пустынного приключения', en: 'Real moments from a desert adventure', zh: '沙漠旅途中的真实瞬间' }, location: { ru: 'Египетская пустыня', en: 'Egyptian desert', zh: '埃及沙漠' } }
];

function getMediaPresentation(item) {
  const copy = AUTHENTIC_MEDIA_COPY[item.id] || item;
  return {
    title: copy.title?.[currentLang] || copy.title?.ru || item.title?.[currentLang] || item.title?.ru || '',
    location: copy.location?.[currentLang] || copy.location?.ru || item.location?.[currentLang] || item.location?.ru || ''
  };
}

function getMediaCategory(item) {
  return item.category || AUTHENTIC_MEDIA_CATEGORY[item.id] || 'all';
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  renderDestinations('all');
  renderReviews();
  renderGallery('all');
  initFaqAccordion();
  initMobileNav();
  initLightbox();
  initInfluencerStory();
  initHeaderScroll();
  initScrollEffects();
  initContactChooser();
  initHeroGallery();
  initHeroVideo();
  initBackToTop();
});

/* ==========================================================================
   1. Multilingual Localization Engine
   ========================================================================== */
function getLanguageFromUrl() {
  const path = window.location.pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
  const segments = path.split('/');
  const first = segments[0] || '';
  if (first === 'en') return 'en';
  if (first === 'zh' || first === 'cn') return 'zh';
  if (first === 'ru') return 'ru';

  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  if (langParam && (langParam === 'en' || langParam === 'zh' || langParam === 'ru')) {
    return langParam;
  }
  return null;
}

function initLanguage() {
  const urlLang = getLanguageFromUrl();
  const savedLang = localStorage.getItem('mahmoud_tour_lang');

  if (urlLang) {
    currentLang = urlLang;
  } else if (savedLang && (savedLang === 'ru' || savedLang === 'en' || savedLang === 'zh')) {
    currentLang = 'ru';
  } else {
    currentLang = 'ru';
  }
  localStorage.setItem('mahmoud_tour_lang', currentLang);
  
  // Set language buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', (e) => {
      const targetLang = e.currentTarget.dataset.lang;
      // Close the drawer BEFORE switching language. setLanguage() re-renders the
      // destinations, reviews and the whole gallery, which blocks the main thread
      // for ~1s on a phone — if we closed afterwards the menu would sit visibly
      // frozen open, still showing the previous language, for that whole time.
      const links = document.getElementById('nav-links');
      if (links && links.classList.contains('active')) {
        links.classList.remove('active');
      }
      setLanguage(targetLang, true);
    });
  });

  // Handle browser Back / Forward buttons
  window.addEventListener('popstate', () => {
    const lang = getLanguageFromUrl() || 'ru';
    if (lang !== currentLang) {
      setLanguage(lang, false);
    }
  });

  applyTranslations(currentLang);
  document.body.classList.toggle('lang-zh', currentLang === 'zh');
}

function initContactChooser() {
  const trigger = document.getElementById('contact-chooser-trigger');
  const chooser = document.getElementById('contact-chooser');
  if (!trigger || !chooser) return;

  const setOpen = (open) => {
    chooser.classList.toggle('is-open', open);
    chooser.setAttribute('aria-hidden', String(!open));
    trigger.setAttribute('aria-expanded', String(open));
  };

  trigger.addEventListener('click', () => {
    setOpen(!chooser.classList.contains('is-open'));
  });

  document.addEventListener('click', (event) => {
    if (!chooser.classList.contains('is-open')) return;
    if (!chooser.contains(event.target) && !trigger.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && chooser.classList.contains('is-open')) {
      setOpen(false);
      trigger.focus();
    }
  });
}

// Guards the deferred re-render below so a rapid second language tap wins.
let langRenderToken = 0;

function setLanguage(lang, updateUrl = true) {
  if (currentLang === lang && !updateUrl) return;
  currentLang = lang;
  localStorage.setItem('mahmoud_tour_lang', lang);
  
  document.body.classList.toggle('lang-zh', lang === 'zh');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  if (updateUrl) {
    const hash = window.location.hash || '';
    let targetPath = '/';
    if (lang === 'en') targetPath = '/en';
    else if (lang === 'zh') targetPath = '/zh';

    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
    if (currentPath !== targetPath) {
      history.pushState({ lang }, '', targetPath + hash);
    }
  }

  applyTranslations(lang);

  // The three render* calls below rebuild the destinations, the reviews and all
  // ~78 gallery cards. That is roughly a second of blocked main thread on a
  // phone. Run it after the browser has painted the closed menu and the newly
  // translated text, so the UI responds instantly instead of freezing.
  const token = ++langRenderToken;
  const renderDynamic = () => {
    if (token !== langRenderToken) return; // a newer language switch superseded this one
    const activeDestTab = document.querySelector('.dest-tab-btn.active')?.dataset.tab || 'all';
    renderDestinations(activeDestTab);

    renderReviews();

    renderGallery();
    updateHeroGalleryCaption();
  };

  // double rAF -> guarantees one painted frame before the heavy work starts
  requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(renderDynamic, 0)));
}

function updateHeroGalleryCaption() {
  const slides = document.querySelectorAll('.hero-gallery-slide');
  const caption = document.getElementById('hero-photo-caption');
  const activeSlide = slides[heroGalleryIndex];
  if (!caption || !activeSlide) return;

  caption.textContent = activeSlide.getAttribute(`data-caption-${currentLang}`)
    || activeSlide.getAttribute('data-caption-ru')
    || '';
}

function initHeroGallery() {
  const gallery = document.getElementById('hero-gallery');
  if (!gallery) return;

  const slides = Array.from(gallery.querySelectorAll('.hero-gallery-slide'));
  const dots = Array.from(gallery.querySelectorAll('.hero-gallery-dot'));
  const previous = gallery.querySelector('.hero-gallery-prev');
  const next = gallery.querySelector('.hero-gallery-next');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer = null;

  const showSlide = (index) => {
    heroGalleryIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === heroGalleryIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });

    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === heroGalleryIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', String(active));
    });

    updateHeroGalleryCaption();
  };

  const stopRotation = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };

  const startRotation = () => {
    stopRotation();
    if (!reduceMotion) timer = window.setInterval(() => showSlide(heroGalleryIndex + 1), 6000);
  };

  previous?.addEventListener('click', () => {
    showSlide(heroGalleryIndex - 1);
    startRotation();
  });

  next?.addEventListener('click', () => {
    showSlide(heroGalleryIndex + 1);
    startRotation();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startRotation();
    });
  });

  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showSlide(heroGalleryIndex - 1);
    if (event.key === 'ArrowRight') showSlide(heroGalleryIndex + 1);
  });

  let touchStartX = 0;
  gallery.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) touchStartX = e.touches[0].clientX;
    stopRotation();
  }, { passive: true });

  gallery.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) showSlide(heroGalleryIndex - 1);
        else showSlide(heroGalleryIndex + 1);
      }
    }
    startRotation();
  }, { passive: true });

  gallery.addEventListener('mouseenter', stopRotation);
  gallery.addEventListener('mouseleave', startRotation);
  gallery.addEventListener('focusin', stopRotation);
  gallery.addEventListener('focusout', startRotation);

  showSlide(0);
  startRotation();
}

function initHeroVideo() {
  const video = document.querySelector('video.hero-egypt-animation');
  if (!video) return;

  if (video.dataset.src && !video.src) {
    video.src = video.dataset.src;
  }

  const playVideo = () => {
    if (typeof video.play === 'function') {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  playVideo();
  window.addEventListener('touchstart', playVideo, { once: true, passive: true });
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ru;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // Update dynamic data-label attributes (e.g. for floating WhatsApp button ::after)
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-label');
    if (dict[key]) {
      el.setAttribute('data-label', dict[key]);
    }
  });

  // Update all WhatsApp chat links with localized prefilled message
  const waMsg = dict.whatsappDefaultText || 'Hello Mahmoud!';
  const waUrl = `https://wa.me/201009686874?text=${encodeURIComponent(waMsg)}`;
  document.querySelectorAll('.channel-whatsapp, .hero-whatsapp, .fl-whatsapp, .quick-channel-primary, .card-whatsapp, .social-whatsapp').forEach(el => {
    el.href = waUrl;
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Sync in-card story language buttons
  document.querySelectorAll('.story-lang-btn').forEach(btn => {
    const isActive = btn.dataset.storyLang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Update page title & meta description if defined
  if (dict.pageTitle) {
    document.title = dict.pageTitle;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.metaDescription) {
    metaDesc.setAttribute('content', dict.metaDescription);
  }
}

/* ==========================================================================
   2. Destinations & Venues Engine
   ========================================================================== */
function renderDestinations(filter = 'all') {
  const container = document.getElementById('destinations-container');
  if (!container) return;

  const filteredRegions = filter === 'all' 
    ? DESTINATIONS_DATA 
    : DESTINATIONS_DATA.filter(r => r.id === filter);

  let html = '';

  filteredRegions.forEach((region, regionIndex) => {
    const regionName = region.name[currentLang] || region.name.ru;
    const regionTagline = region.tagline[currentLang] || region.tagline.ru;
    const regionBadge = region.badge[currentLang] || region.badge.ru;
    const previewVenues = region.venues.slice(0, 3);
    const exploreLabel = TRANSLATIONS[currentLang]?.destinationChatCta || 'Ask Mahmoud about this route';

    html += `
      <article class="dest-region-block destination-card" id="region-${region.id}">
        <div class="destination-visual">
          <img src="${region.coverImage}" alt="${escapeAttr(regionName)}" loading="lazy">
          <span class="destination-index">${String(regionIndex + 1).padStart(2, '0')}</span>
        </div>
        <div class="destination-copy">
          <div class="dest-region-header">
            <h3 class="dest-region-title">${regionName}</h3>
            <span class="dest-region-badge">${regionBadge}</span>
          </div>
          <p class="dest-region-tagline">${regionTagline}</p>
          <ul class="destination-preview-list">
            ${previewVenues.map(venue => `<li>${venue.name[currentLang] || venue.name.ru}</li>`).join('')}
          </ul>
          <a class="destination-link" href="#contact">
            <span>${exploreLabel}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;

  // Re-bind tabs
  document.querySelectorAll('.dest-tab-btn').forEach(btn => {
    btn.onclick = (e) => {
      document.querySelectorAll('.dest-tab-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      renderDestinations(e.currentTarget.dataset.tab);
    };
  });
}

function escapeAttr(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

/* ==========================================================================
   3. Interactive Custom Trip Builder
   ========================================================================== */
function initTripBuilder() {
  const container = document.getElementById('builder-venues-container');
  if (!container) return;

  let html = '';

  DESTINATIONS_DATA.forEach(region => {
    const regionName = region.name[currentLang] || region.name.ru;

    html += `
      <div class="builder-region-group open">
        <button type="button" class="builder-region-btn" onclick="toggleBuilderRegion(this)">
          <span>${regionName} (${region.venues.length})</span>
          <span class="region-toggle-icon">▼</span>
        </button>
        <div class="builder-venues-checklist">
          ${region.venues.map(v => {
            const vName = v.name[currentLang] || v.name.ru;
            const checked = selectedVenues.has(v.id) ? 'checked' : '';
            return `
              <label class="checkbox-label">
                <input type="checkbox" value="${v.id}" data-name="${vName}" data-region="${regionName}" onchange="handleVenueCheck(this)" ${checked}>
                <span>${vName}</span>
              </label>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Add event listeners on input controls
  ['builder-days', 'builder-date', 'builder-adults', 'builder-children', 'builder-lang', 'builder-notes', 'builder-name', 'builder-contact'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateTripSummary);
      el.addEventListener('change', updateTripSummary);
    }
  });

  document.querySelectorAll('input[name="transport-option"]').forEach(cb => {
    cb.addEventListener('change', updateTripSummary);
  });

  updateTripSummary();
}

function toggleBuilderRegion(btn) {
  const group = btn.parentElement;
  group.classList.toggle('open');
}

function handleVenueCheck(checkbox) {
  const vId = checkbox.value;
  if (checkbox.checked) {
    selectedVenues.add(vId);
  } else {
    selectedVenues.delete(vId);
  }
  updateTripSummary();
  
  // Also reflect in destination cards
  const activeDestTab = document.querySelector('.dest-tab-btn.active')?.dataset.tab || 'all';
  renderDestinations(activeDestTab);
}

function toggleVenueSelection(venueId, venueName) {
  if (selectedVenues.has(venueId)) {
    selectedVenues.delete(venueId);
  } else {
    selectedVenues.add(venueId);
  }
  
  // Check/uncheck corresponding box in builder
  const cb = document.querySelector(`input[value="${venueId}"]`);
  if (cb) cb.checked = selectedVenues.has(venueId);

  updateTripSummary();

  const activeDestTab = document.querySelector('.dest-tab-btn.active')?.dataset.tab || 'all';
  renderDestinations(activeDestTab);
}

function updateTripBuilderLanguage() {
  initTripBuilder();
}

function updateTripSummary() {
  const outputEl = document.getElementById('builder-summary-output');
  if (!outputEl) return;

  const days = document.getElementById('builder-days')?.value || '3';
  const date = document.getElementById('builder-date')?.value || (currentLang === 'ru' ? 'Гибкие даты' : (currentLang === 'zh' ? '待定' : 'Flexible'));
  const adults = document.getElementById('builder-adults')?.value || '2';
  const children = document.getElementById('builder-children')?.value || '0';
  const guideLang = document.getElementById('builder-lang')?.value || 'Russian';

  // Get selected transport options
  const selectedTransport = [];
  document.querySelectorAll('input[name="transport-option"]:checked').forEach(cb => {
    selectedTransport.push(cb.closest('label')?.querySelector('span')?.textContent.trim() || cb.dataset.label || cb.value);
  });

  // Collect names of all selected venues
  const selectedList = [];
  DESTINATIONS_DATA.forEach(region => {
    region.venues.forEach(v => {
      if (selectedVenues.has(v.id)) {
        selectedList.push({
          name: v.name[currentLang] || v.name.ru,
          region: region.name[currentLang] || region.name.ru
        });
      }
    });
  });

  if (selectedList.length === 0 && selectedTransport.length === 0) {
    outputEl.innerHTML = `
      <div style="padding: 16px; background: rgba(212,175,55,0.05); border: 1px dashed var(--border-gold); border-radius: var(--radius-sm); text-align: center; color: var(--text-secondary); font-size: 0.86rem;">
        ${TRANSLATIONS[currentLang].builderSummaryPlaceholder || 'Выберите достопримечательности слева, чтобы сформировать персонализированный маршрут путешествия.'}
      </div>
    `;
    return;
  }

  let html = `
    <div style="margin-bottom: 16px; padding: 14px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm); border-left: 3px solid var(--gold-400);">
      <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--gold-300); margin-bottom: 4px; letter-spacing: 0.05em;">
        ${currentLang === 'ru' ? 'Параметры поездки' : (currentLang === 'zh' ? '行程概要' : 'Trip Parameters')}
      </div>
      <div style="color: var(--text-white); font-weight: 600; font-size: 0.92rem;">
        ${days} ${currentLang === 'ru' ? 'дней' : (currentLang === 'zh' ? '天' : 'days')} • ${adults} ${currentLang === 'ru' ? 'взр.' : 'adults'}${children !== '0' ? `, ${children} ${currentLang === 'ru' ? 'дет.' : 'children'}` : ''}
      </div>
      <div style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 2px;">
        ${currentLang === 'ru' ? 'Дата' : (currentLang === 'zh' ? '日期' : 'Date')}: <strong>${date}</strong> | ${currentLang === 'ru' ? 'Язык гида' : 'Guide'}: <strong>${guideLang}</strong>
      </div>
    </div>
  `;

  if (selectedList.length > 0) {
    html += `
      <div style="margin-bottom: 16px;">
        <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--gold-300); margin-bottom: 8px; letter-spacing: 0.05em;">
          ${currentLang === 'ru' ? 'Выбранные локации' : (currentLang === 'zh' ? '已选景点' : 'Selected Places')} (${selectedList.length}):
        </div>
        <div style="display: flex; flex-direction: column; gap: 6px; max-height: 180px; overflow-y: auto; padding-right: 4px;">
          ${selectedList.map(item => `
            <div class="summary-route-item">
              <strong>${item.name}</strong> <span style="font-size: 0.74rem; color: var(--text-muted);">(${item.region})</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (selectedTransport.length > 0) {
    html += `
      <div style="margin-bottom: 16px;">
        <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--gold-300); margin-bottom: 8px; letter-spacing: 0.05em;">
          ${currentLang === 'ru' ? 'Сервис и логистика' : (currentLang === 'zh' ? '交通与服务' : 'Logistics & Upgrades')}:
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${selectedTransport.map(item => `
            <span style="display: inline-block; font-size: 0.76rem; background: rgba(34,158,217,0.14); border: 1px solid rgba(34,158,217,0.35); color: #7dd3fc; padding: 4px 10px; border-radius: var(--radius-xs);">
              ✓ ${item}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  }

  outputEl.innerHTML = html;
}

function buildTripFormattedText() {
  const days = document.getElementById('builder-days')?.value || '3';
  const date = document.getElementById('builder-date')?.value || 'TBD';
  const adults = document.getElementById('builder-adults')?.value || '2';
  const children = document.getElementById('builder-children')?.value || '0';
  const guideLang = document.getElementById('builder-lang')?.value || 'Russian';
  const name = document.getElementById('builder-name')?.value || 'Гость';
  const contact = document.getElementById('builder-contact')?.value || '';
  const notes = document.getElementById('builder-notes')?.value || '';

  const selectedTransport = [];
  document.querySelectorAll('input[name="transport-option"]:checked').forEach(cb => {
    selectedTransport.push(cb.closest('label')?.querySelector('span')?.textContent.trim() || cb.dataset.label || cb.value);
  });

  const selectedList = [];
  DESTINATIONS_DATA.forEach(region => {
    region.venues.forEach(v => {
      if (selectedVenues.has(v.id)) {
        selectedList.push(`• ${v.name.ru} (${region.name.ru})`);
      }
    });
  });

  let msg = `Здравствуйте, Махмуд!\n\nХочу заказать индивидуальный тур по Египту:\n`;
  msg += `👤 Имя: ${name}\n`;
  if (contact) msg += `📱 Контакт: ${contact}\n`;
  msg += `🗓 Длительность: ${days} дн.\n`;
  msg += `📅 Дата поездки: ${date}\n`;
  msg += `👥 Гости: ${adults} взр., ${children} дет.\n`;
  msg += `🗣 Язык гида: ${guideLang}\n\n`;

  if (selectedList.length > 0) {
    msg += `🏛 Выбранные достопримечательности (${selectedList.length}):\n${selectedList.join('\n')}\n\n`;
  }

  if (selectedTransport.length > 0) {
    msg += `✈️ Транспорт и размещение:\n${selectedTransport.map(t => `• ${t}`).join('\n')}\n\n`;
  }

  if (notes && notes.trim() !== '') {
    msg += `📝 Пожелания: ${notes}\n\n`;
  }

  msg += `Прошу рассчитать индивидуальную программу тура. Спасибо!`;
  return msg;
}

function sendTripToWhatsApp() {
  const text = buildTripFormattedText();
  const phone = '201009686874';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function sendTripToTelegram() {
  const text = buildTripFormattedText();
  const url = `https://t.me/+201009686874`;
  navigator.clipboard.writeText(text).then(() => {
    alert(currentLang === 'ru' 
      ? 'Детали маршрута скопированы! Открываем чат с Махмудом в Telegram — отправьте сообщение.' 
      : 'Itinerary copied to clipboard! Opening Telegram with Mahmoud — please send the message.');
    window.open(url, '_blank');
  }).catch(() => {
    window.open(url, '_blank');
  });
}

function sendTripToViber() {
  const url = `viber://chat?number=201009686874`;
  window.open(url, '_blank');
}

function sendTripToLine() {
  const text = buildTripFormattedText();
  const url = `https://line.me/R/msg/text/?${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

/* ==========================================================================
   4. Verified Reviews Engine
   ========================================================================== */
let reviewsAutoplayTimer = null;
let reviewsObserver = null;

function renderReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  if (reviewsAutoplayTimer) {
    clearInterval(reviewsAutoplayTimer);
    reviewsAutoplayTimer = null;
  }
  if (reviewsObserver) {
    reviewsObserver.disconnect();
    reviewsObserver = null;
  }

  const verifiedTag = TRANSLATIONS[currentLang]?.reviewVerifiedTag || (currentLang === 'zh' ? '✓ 真实认证评价' : (currentLang === 'en' ? '✓ Verified Review' : '✓ Проверенный отзыв'));
  const prevLabel = TRANSLATIONS[currentLang]?.reviewsSliderPrev || (currentLang === 'zh' ? '上一条评价' : (currentLang === 'en' ? 'Previous review' : 'Предыдущий отзыв'));
  const nextLabel = TRANSLATIONS[currentLang]?.reviewsSliderNext || (currentLang === 'zh' ? '下一条评价' : (currentLang === 'en' ? 'Next review' : 'Следующий отзыв'));

  let html = '';

  REVIEWS_DATA.forEach((rev, index) => {
    const author = currentLang === 'ru' ? rev.author : (currentLang === 'zh' ? rev.authorZh : rev.authorEn);
    const location = currentLang === 'ru' ? rev.location : (currentLang === 'zh' ? rev.locationZh : rev.locationEn);
    const tripType = rev.tripType[currentLang] || rev.tripType.ru;
    const title = rev.title[currentLang] || rev.title.ru;
    const text = rev.text[currentLang] || rev.text.ru;
    const initials = author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const avatar = rev.avatar || '';

    html += `
      <article class="review-card" data-index="${index}">
        <div class="review-header">
          <div class="reviewer-info">
            <div class="reviewer-avatar ${avatar ? 'has-image' : ''}">
              ${avatar ? `<img src="${avatar}" alt="${escapeAttr(author)}" loading="lazy">` : initials}
            </div>
            <div>
              <div class="reviewer-name">${author}</div>
              <div class="reviewer-meta">${location} • ${rev.date}</div>
            </div>
          </div>
          <div class="review-stars" aria-label="5 out of 5 stars">
            <span style="color:#f59e0b;font-weight:700;font-size:0.95rem;display:inline-flex;align-items:center;gap:3px;">
              5.0 <svg viewBox="0 0 24 24" width="16" height="16" fill="#f59e0b" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </span>
          </div>
        </div>

        <div class="review-trip-type">
          ${tripType}
        </div>
        <div class="review-quote-title">
          «${title}»
        </div>
        <p class="review-text">«${text}»</p>

        <div class="review-card-footer">
          <span class="review-tour-tag">${verifiedTag}</span>
          <a href="${rev.sourceUrl}" target="_blank" rel="noopener noreferrer" class="review-source-link">${rev.source}</a>
        </div>
      </article>
    `;
  });

  container.innerHTML = `
    <div class="reviews-slider-controls" aria-label="Reviews slider controls">
      <div class="reviews-counter" id="reviews-counter">
        <span class="reviews-counter-current">1</span> / <span class="reviews-counter-total">${REVIEWS_DATA.length}</span>
      </div>
      <div class="reviews-nav-buttons">
        <button type="button" class="reviews-slider-btn" id="reviews-prev" aria-label="${prevLabel}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button type="button" class="reviews-slider-btn" id="reviews-next" aria-label="${nextLabel}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
    <div class="reviews-slider" id="reviews-slider" tabindex="0" role="region" aria-label="Customer reviews carousel">
      ${html}
    </div>
  `;

  const slider = document.getElementById('reviews-slider');
  const prev = document.getElementById('reviews-prev');
  const next = document.getElementById('reviews-next');
  const counterEl = document.getElementById('reviews-counter');
  if (!slider || !prev || !next) return;

  const cards = Array.from(slider.querySelectorAll('.review-card'));
  if (!cards.length) return;

  const getStep = () => {
    const card = slider.querySelector('.review-card');
    return card ? (card.offsetWidth + 24) : 380;
  };

  const updateCounter = () => {
    if (!counterEl) return;
    const step = getStep();
    const activeIndex = Math.min(
      cards.length,
      Math.max(1, Math.round(slider.scrollLeft / step) + 1)
    );
    const currSpan = counterEl.querySelector('.reviews-counter-current');
    if (currSpan) currSpan.textContent = activeIndex;
  };

  const scrollToStep = (direction) => {
    const step = getStep();
    slider.scrollBy({
      left: direction * step,
      behavior: 'smooth'
    });
  };

  // Autoplay functionality (slow automatic sliding)
  const AUTOPLAY_INTERVAL = 4600; // 4.6 seconds for a relaxed, slow slide
  let isPaused = false;
  let isIntersecting = false;
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const autoAdvance = () => {
    if (isPaused || isDown || !isIntersecting || prefersReducedMotion || document.hidden) return;
    const step = getStep();
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScroll - 16) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: step, behavior: 'smooth' });
    }
  };

  const startAutoplay = () => {
    if (reviewsAutoplayTimer) clearInterval(reviewsAutoplayTimer);
    if (!prefersReducedMotion) {
      reviewsAutoplayTimer = setInterval(autoAdvance, AUTOPLAY_INTERVAL);
    }
  };

  const stopAutoplay = () => {
    if (reviewsAutoplayTimer) {
      clearInterval(reviewsAutoplayTimer);
      reviewsAutoplayTimer = null;
    }
  };

  const pauseAutoplay = () => {
    isPaused = true;
    stopAutoplay();
  };

  const resumeAutoplay = () => {
    isPaused = false;
    startAutoplay();
  };

  const onManualAction = (direction) => {
    scrollToStep(direction);
    stopAutoplay();
    setTimeout(startAutoplay, 2500);
  };

  prev.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    onManualAction(-1);
  });

  next.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    onManualAction(1);
  });

  // Desktop Mouse Drag Navigation
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let hasDragged = false;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    hasDragged = false;
    pauseAutoplay();
    slider.classList.add('is-dragging');
    startX = e.pageX - slider.offsetLeft;
    scrollStart = slider.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      slider.classList.remove('is-dragging');
      setTimeout(() => {
        updateCounter();
        resumeAutoplay();
      }, 100);
    }
  });

  slider.addEventListener('mouseenter', pauseAutoplay);
  slider.addEventListener('mouseleave', () => {
    if (isDown) {
      isDown = false;
      slider.classList.remove('is-dragging');
    }
    resumeAutoplay();
  });

  slider.addEventListener('touchstart', pauseAutoplay, { passive: true });
  slider.addEventListener('touchend', () => {
    setTimeout(resumeAutoplay, 1800);
  }, { passive: true });

  slider.addEventListener('focusin', pauseAutoplay);
  slider.addEventListener('focusout', resumeAutoplay);

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    hasDragged = true;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.4;
    slider.scrollLeft = scrollStart - walk;
  });

  // Prevent link click when user is dragging
  slider.addEventListener('click', (e) => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged = false;
    }
  }, true);

  slider.addEventListener('scroll', () => {
    requestAnimationFrame(updateCounter);
  }, { passive: true });

  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      onManualAction(-1);
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      onManualAction(1);
      e.preventDefault();
    }
  });

  // Observe visibility in viewport to run autoplay only when in view
  if ('IntersectionObserver' in window) {
    reviewsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && !isPaused) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      });
    }, { threshold: 0.15 });
    reviewsObserver.observe(container);
  } else {
    isIntersecting = true;
    startAutoplay();
  }

  // Respect tab visibility
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay();
    } else if (isIntersecting && !isPaused) {
      startAutoplay();
    }
  });

  updateCounter();
}

/* ==========================================================================
   5. Media Gallery: Infinite Showcase & Lightbox
   ========================================================================== */

let velocityAnimFrame = null;
let velocityTracksData = [];
let lastAnimTimestamp = performance.now();
let galleryObserver = null;
let isGalleryInView = true;

function getCategoryLabel(cat) {
  const labels = {
    'pyramids': { ru: 'Гиза и Пирамиды', en: 'Giza & Pyramids', zh: '吉萨金字塔' },
    'cairo': { ru: 'Каир и Музеи', en: 'Cairo & Museums', zh: '开罗与博物馆' },
    'luxor-aswan': { ru: 'Луксор и Асуан', en: 'Luxor & Aswan', zh: '卢克索与阿斯旺' },
    'safari': { ru: 'Сахара Сафари', en: 'Sahara Safari', zh: '撒哈拉沙漠' },
    'videos': { ru: 'Видеоэкскурсия', en: 'Tour Video', zh: '实拍视频' }
  };
  return labels[cat]?.[currentLang] || labels[cat]?.ru || cat;
}

function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  // Stop any existing animation loop while re-rendering
  if (velocityAnimFrame) {
    cancelAnimationFrame(velocityAnimFrame);
    velocityAnimFrame = null;
  }
  if (galleryObserver) {
    galleryObserver.disconnect();
    galleryObserver = null;
  }
  velocityTracksData = [];

  currentFilteredMedia = MEDIA_GALLERY;

  // 3 alternating tracks distributing all media items evenly
  const targetPerRow = Math.ceil(MEDIA_GALLERY.length / 3);
  const row1Items = [];
  const row2Items = [];
  const row3Items = [];

  MEDIA_GALLERY.forEach((item) => {
    const cat = getMediaCategory(item);
    if (cat === 'pyramids' || item.id === 'pic-15' || item.id === 'vid-1') {
      if (row1Items.length < targetPerRow) row1Items.push(item);
      else if (row2Items.length < targetPerRow) row2Items.push(item);
      else row3Items.push(item);
    } else if (cat === 'luxor-aswan' || item.id === 'vid-2' || item.id === 'vid-4') {
      if (row2Items.length < targetPerRow) row2Items.push(item);
      else if (row3Items.length < targetPerRow) row3Items.push(item);
      else row1Items.push(item);
    } else {
      if (row3Items.length < targetPerRow) row3Items.push(item);
      else if (row1Items.length < targetPerRow) row1Items.push(item);
      else row2Items.push(item);
    }
  });

  // Distribute any leftover items
  MEDIA_GALLERY.forEach(item => {
    if (!row1Items.includes(item) && !row2Items.includes(item) && !row3Items.includes(item)) {
      if (row1Items.length <= row2Items.length && row1Items.length <= row3Items.length) row1Items.push(item);
      else if (row2Items.length <= row3Items.length) row2Items.push(item);
      else row3Items.push(item);
    }
  });

  const rowsData = [
    { direction: -1, baseSpeed: 38, items: row1Items, repeat: 2 },
    { direction: 1, baseSpeed: 38, items: row2Items, repeat: 2 },
    { direction: -1, baseSpeed: 34, items: row3Items, repeat: 2 }
  ];

  // Render HTML structure
  let html = '';

  rowsData.forEach((row, rowIndex) => {
    html += `
      <div class="velocity-track-row" data-row="${rowIndex}">
        <div class="velocity-track-inner" id="velocity-track-${rowIndex}">
    `;

    for (let r = 0; r < row.repeat; r++) {
      row.items.forEach(item => {
        const { title, location: loc } = getMediaPresentation(item);
        const isVideo = item.type === 'video';
        const cat = isVideo ? 'videos' : getMediaCategory(item);
        const catLabel = getCategoryLabel(cat);
        const globalIdx = currentFilteredMedia.findIndex(m => m.id === item.id);
        const openIdx = globalIdx >= 0 ? globalIdx : 0;

        html += `
          <div class="velocity-card" onclick="openLightbox(${openIdx})" data-id="${item.id}" role="button" tabindex="0" aria-label="${escapeAttr(title)}">
            <img src="${isVideo ? item.poster : item.src}" alt="${escapeAttr(title)}" class="velocity-card-img" loading="lazy" decoding="async" fetchpriority="low" width="350" height="245" draggable="false">
            <span class="velocity-card-tag">${catLabel}</span>
            ${isVideo ? `
              <div class="velocity-video-badge">
                <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            ` : ''}
            <div class="velocity-card-overlay">
              <div class="velocity-card-title">${title}</div>
              <div class="velocity-card-loc">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>${loc}</span>
              </div>
            </div>
          </div>
        `;
      });
    }

    html += `
        </div>
      </div>
    `;
  });

  // Multilingual interactive hint
  const hints = {
    ru: '✦ Проведите пальцем для прокрутки • Нажмите на любое фото или видео для просмотра в HD',
    en: '✦ Drag to explore • Tap any photo or video to view in HD',
    zh: '✦ 左右滑动浏览 • 点击任意照片或视频查看高清大图与实拍'
  };
  const hintText = hints[currentLang] || hints.ru;

  html += `
    <div class="velocity-gallery-hint">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      <span>${hintText}</span>
    </div>
  `;

  container.innerHTML = html;

  rowsData.forEach((row, rowIndex) => {
    const rowEl = container.querySelector(`.velocity-track-row[data-row="${rowIndex}"]`);
    const innerEl = document.getElementById(`velocity-track-${rowIndex}`);
    if (rowEl && innerEl) {
      const trackObj = {
        rowElement: rowEl,
        innerElement: innerEl,
        direction: row.direction,
        baseSpeed: row.baseSpeed,
        repeat: row.repeat,
        itemCount: row.items.length,
        x: row.direction === 1 ? -100 : 0,
        isDragging: false
      };
      velocityTracksData.push(trackObj);
      initTrackPointerEvents(rowEl, trackObj);
    }
  });

  // IntersectionObserver: ONLY animate when gallery is in/near viewport
  galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isGalleryInView = entry.isIntersecting;
      if (isGalleryInView) {
        lastAnimTimestamp = performance.now();
        if (!velocityAnimFrame) {
          velocityAnimFrame = requestAnimationFrame(runScrollVelocityLoop);
        }
      }
    });
  }, { rootMargin: '300px 0px' });

  galleryObserver.observe(container);

  // Initial animation start
  isGalleryInView = true;
  lastAnimTimestamp = performance.now();
  if (!velocityAnimFrame) {
    velocityAnimFrame = requestAnimationFrame(runScrollVelocityLoop);
  }
}

function getTrackWrapWidth(track) {
  const isMobile = window.innerWidth <= 768;
  const cardW = isMobile ? 275 : 350;
  const gap = isMobile ? 12 : 18;
  return (track.itemCount || 30) * (cardW + gap);
}

function initTrackPointerEvents(rowElement, trackObj) {
  let startX = 0;
  let startY = 0;
  let axis = null;
  let dragStartX = 0;
  let isDown = false;
  let hasMoved = false;

  rowElement.addEventListener('pointerdown', (e) => {
    isDown = true;
    hasMoved = false;
    startX = e.clientX;
    startY = e.clientY;
    axis = null;
    dragStartX = trackObj.x;
    trackObj.isDragging = false;
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    const diff = e.clientX - startX;
    const diffY = e.clientY - startY;

    // Lock the gesture to one axis on first meaningful movement.
    if (!axis) {
      if (Math.abs(diff) < 8 && Math.abs(diffY) < 8) return;
      axis = Math.abs(diff) > Math.abs(diffY) ? 'x' : 'y';
      if (axis === 'x') {
        trackObj.isDragging = true;
        dragStartX = trackObj.x;
        startX = e.clientX;
        return;
      }
    }
    // Vertical page scroll: leave the row alone.
    if (axis === 'y') return;

    if (Math.abs(diff) > 6) hasMoved = true;
    trackObj.x = dragStartX + diff;

    const wrapWidth = getTrackWrapWidth(trackObj);
    if (wrapWidth > 100) {
      if (trackObj.x <= -wrapWidth) trackObj.x += wrapWidth;
      else if (trackObj.x >= 0) trackObj.x -= wrapWidth;
    }
    const dpr = window.devicePixelRatio || 1;
    trackObj.innerElement.style.transform = `translate3d(${Math.round(trackObj.x * dpr) / dpr}px, 0, 0)`;
  });

  const endDrag = () => {
    if (!isDown) return;
    isDown = false;
    axis = null;
    trackObj.isDragging = false;
  };

  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  // Suppress card click if dragged
  rowElement.addEventListener('click', (e) => {
    if (hasMoved) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, true);
}

function runScrollVelocityLoop(timestamp) {
  if (!isGalleryInView) {
    velocityAnimFrame = null;
    return;
  }

  const rawDt = (timestamp - lastAnimTimestamp) / 1000;
  const dt = Math.min(Math.max(rawDt, 0.001), 0.032);
  lastAnimTimestamp = timestamp;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  velocityTracksData.forEach(track => {
    if (!track.innerElement || track.isDragging) return;
    if (reduceMotion) return;

    const isHovered = track.rowElement.matches(':hover');
    const hoverFactor = isHovered ? 0.2 : 1.0;

    // Constant smooth glide
    let moveBy = track.direction * track.baseSpeed * dt * hoverFactor;
    track.x += moveBy;

    // Stable, mathematically exact boundary wrap
    const wrapWidth = getTrackWrapWidth(track);
    if (wrapWidth > 100) {
      if (track.x <= -wrapWidth) {
        track.x += wrapWidth;
      } else if (track.x >= 0) {
        track.x -= wrapWidth;
      }
    }

    // Round to device pixels to prevent sub-pixel jitter on mobile
    const dpr = window.devicePixelRatio || 1;
    const snappedX = Math.round(track.x * dpr) / dpr;
    track.innerElement.style.transform = `translate3d(${snappedX}px, 0, 0)`;
  });

  velocityAnimFrame = requestAnimationFrame(runScrollVelocityLoop);
}

function renderFooterCollage() {
  const collage = document.getElementById('footer-collage');
  if (!collage || typeof MEDIA_GALLERY === 'undefined') return;

  const uniquePhotos = [...new Set(
    MEDIA_GALLERY
      .filter(item => item.type === 'photo')
      .map(item => item.src)
  )];

  collage.innerHTML = uniquePhotos
    .map((src, index) => `<img src="${src}" alt="Egypt travel photo ${index + 1}" loading="lazy">`)
    .join('');
}

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');

  if (closeBtn && modal) {
    closeBtn.onclick = closeLightbox;
    modal.onclick = (e) => {
      if (e.target === modal) closeLightbox();
    };
  }

  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
  });
}

function openLightbox(index) {
  currentMediaIndex = index;
  const modal = document.getElementById('lightbox-modal');
  const container = document.getElementById('lightbox-media');
  const caption = document.getElementById('lightbox-caption');

  if (!modal || !container || !currentFilteredMedia[index]) return;

  const item = currentFilteredMedia[index];
  const { title, location: loc } = getMediaPresentation(item);

  if (item.type === 'video') {
    container.innerHTML = `
      <video src="${item.src}" class="lightbox-video" controls autoplay playsinline style="max-width:100%; max-height:75vh; border-radius:12px;"></video>
    `;
  } else {
    container.innerHTML = `
      <img src="${item.src}" alt="${title}" class="lightbox-img">
    `;
  }

  caption.innerHTML = `<strong>${title}</strong> — ${loc} (${currentMediaIndex + 1} / ${currentFilteredMedia.length})`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const container = document.getElementById('lightbox-media');
  if (container) {
    const video = container.querySelector('video');
    if (video) video.pause();
    container.innerHTML = '';
  }
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  if (!currentFilteredMedia.length) return;
  currentMediaIndex = (currentMediaIndex + dir + currentFilteredMedia.length) % currentFilteredMedia.length;
  openLightbox(currentMediaIndex);
}

/* ==========================================================================
   6. FAQ Accordion & Mobile Nav
   ========================================================================== */
function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.onclick = () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    };
  });
}

function initMobileNav() {
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.onclick = (e) => {
      e.stopPropagation();
      links.classList.toggle('active');
    };

    document.querySelectorAll('.nav-link, .drawer-lang .lang-btn').forEach(l => {
      l.onclick = () => {
        links.classList.remove('active');
      };
    });

    // Close when tapping outside the menu on mobile
    document.addEventListener('click', (e) => {
      if (links.classList.contains('active') && !links.contains(e.target) && !toggle.contains(e.target)) {
        links.classList.remove('active');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('active')) {
        links.classList.remove('active');
      }
    });
  }
}

/* ==========================================================================
   7. Header Scroll Shadow
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   8. Editorial reveal effects
   ========================================================================== */
function initScrollEffects() {
  const targets = document.querySelectorAll(
    '.section-header, .trust-head, .trust-item, .trust-seal, .service-card, .destination-card, .gallery-card, .review-card, .about-photo-wrapper, .about-content, .faq-item, .contact-grid'
  );

  targets.forEach((target, index) => {
    target.classList.add('reveal-on-scroll');
    target.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(target => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  targets.forEach(target => observer.observe(target));
}

/* ==========================================================================
   9. Contact Form Direct Submitter
   ========================================================================== */
function handleContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name')?.value || '';
  const phone = document.getElementById('contact-phone')?.value || '';
  const msg = document.getElementById('contact-msg')?.value || '';

  const text = `Здравствуйте, Махмуд!\n\nНовое обращение с сайта:\n👤 Имя: ${name}\n📱 Телефон/Мессенджер: ${phone}\n💬 Сообщение: ${msg}`;
  const url = `https://wa.me/201009686874?text=${encodeURIComponent(text)}`;
  
  window.open(url, '_blank');

  const alertBox = document.getElementById('contact-alert');
  if (alertBox) {
    alertBox.style.display = 'block';
    alertBox.innerHTML = `✓ ${TRANSLATIONS[currentLang].formSuccess || 'Спасибо! Запрос отправлен. Махмуд свяжется с вами в течение 10 минут.'}`;
  }
}

/* ==========================================================================
   10. Back to Top Button Engine
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   11. Influencer Spotlight & Guest Story Engine (@russborn)
   ========================================================================== */
function initInfluencerStory() {
  const storyCard = document.querySelector('.influencer-story-card');
  if (!storyCard) return;

  const langButtons = storyCard.querySelectorAll('.story-lang-btn');
  const quoteP1 = storyCard.querySelector('.influencer-quote-p1');
  const quoteP2 = storyCard.querySelector('.influencer-quote-p2');

  const setStoryLanguage = (targetLang) => {
    langButtons.forEach(btn => {
      const isActive = btn.dataset.storyLang === targetLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    const dict = TRANSLATIONS[targetLang] || TRANSLATIONS.ru;
    if (quoteP1 && dict.storyQuoteP1) {
      quoteP1.innerHTML = dict.storyQuoteP1;
    }
    if (quoteP2 && dict.storyQuoteP2) {
      quoteP2.innerHTML = dict.storyQuoteP2;
    }
  };

  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLang = e.currentTarget.dataset.storyLang;
      if (targetLang) {
        setStoryLanguage(targetLang);
      }
    });
  });

  // Story Photo Lightbox trigger
  const photoCard = document.getElementById('story-photo-card');
  if (photoCard) {
    photoCard.addEventListener('click', () => {
      openStoryPhotoLightbox();
    });
  }

  // Videos audio & mutual pause handling
  const storyVideos = document.querySelectorAll('.story-reel-video');
  storyVideos.forEach(vid => {
    vid.addEventListener('play', () => {
      storyVideos.forEach(otherVid => {
        if (otherVid !== vid && !otherVid.paused) {
          otherVid.pause();
        }
      });
    });
  });
}

function openStoryPhotoLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const container = document.getElementById('lightbox-media');
  const caption = document.getElementById('lightbox-caption');

  if (!modal || !container) return;

  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.ru;
  const title = dict.storyPhotoCaption || 'Махмуд Хаттаб и @russborn в песках Белой Пустыни';
  const loc = dict.storyPhotoLocation || 'Белая Пустыня, Египет';

  container.innerHTML = `
    <img src="russborn.png" alt="${title}" class="lightbox-img" style="max-height:82vh; border-radius:12px; object-fit:contain;">
  `;

  if (caption) {
    caption.innerHTML = `<strong>${title}</strong> — ${loc}`;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

