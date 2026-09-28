/**
 * VEDA TECHNOLOGY - Main JavaScript Application (main.js)
 * High-performance, modular UI controller for all interactive features.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all core modules
  initTheme();
  initHeader();
  initMobileNav();
  initStatsCounter();
  initTechTicker();
  initPrograms();
  initServices();
  initInternships();
  initFAQs();
  initTestimonials();
  initSpotlightSearch();
  initModals();
  initForms();
});

/* ==========================================================================
   1. Theme Switcher (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('veda-theme');
  
  // Default to light theme
  const currentTheme = storedTheme || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('veda-theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`, 'info');
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  if (theme === 'dark') {
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <span class="sr-only">Switch to Light Mode</span>
    `;
  } else {
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
      <span class="sr-only">Switch to Dark Mode</span>
    `;
  }
}

/* ==========================================================================
   2. Header & Scroll Spy Navigation
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link, .mobile-nav-list .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Scroll spy active link updater
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-list .nav-link, #mobile-drawer .btn');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  function openDrawer() {
    drawer.classList.add('open');
    toggleBtn.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    toggleBtn.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   4. Live Stats Counter Animation
   ========================================================================== */
function initStatsCounter() {
  const statElements = document.querySelectorAll('.stat-count');
  if (!statElements.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statElements.forEach(el => {
          const target = parseInt(el.getAttribute('data-target') || '0', 10);
          animateCount(el, target, 2000);
        });
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.querySelector('.stats-banner') || document.querySelector('#stats');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

function animateCount(element, target, duration) {
  let start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out expo formula
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentVal = Math.floor(easeProgress * target);

    element.textContent = currentVal.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

/* ==========================================================================
   5. Tech Ticker Dynamic Track
   ========================================================================== */
function initTechTicker() {
  const track = document.getElementById('tech-ticker-track');
  if (!track || !window.VEDA_DATA) return;

  const techs = window.VEDA_DATA.techStack || [];
  // Duplicate array to enable seamless infinite scroll loop
  const duplicatedTechs = [...techs, ...techs, ...techs];

  track.innerHTML = duplicatedTechs.map(t => `
    <div class="tech-pill">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary);">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
      <span>${t.name}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   6. Technology Programs Controller & Filtering
   ========================================================================== */
function initPrograms() {
  const container = document.getElementById('programs-grid');
  const filterTabs = document.querySelectorAll('#programs-filter .filter-tab');
  if (!container || !window.VEDA_DATA) return;

  const programs = window.VEDA_DATA.programs || [];

  function renderPrograms(filter = 'all') {
    const filtered = filter === 'all' 
      ? programs 
      : programs.filter(p => p.category === filter);

    container.innerHTML = filtered.map(p => `
      <div class="card" data-category="${p.category}">
        <div class="card-top">
          <div class="card-badge-row">
            <span class="chip-badge">${p.badge}</span>
            <span class="chip-level">${p.level}</span>
          </div>
          <h3 class="card-title">${p.title}</h3>
          <p class="card-desc">${p.description}</p>
          
          <div class="card-meta-list">
            <div class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span><strong>Duration:</strong> ${p.duration}</span>
            </div>
            <div class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              <span><strong>Mode:</strong> ${p.mode}</span>
            </div>
          </div>

          <div class="card-topic-tags">
            ${p.topics.slice(0, 3).map(t => `<span class="topic-tag">${t.split(' ')[0]}</span>`).join('')}
            <span class="topic-tag">+${p.topics.length - 3} more</span>
          </div>
        </div>

        <div class="card-footer">
          <button class="btn btn-secondary btn-sm open-syllabus-btn" data-id="${p.id}" style="flex: 1;">
            View Syllabus
          </button>
          <button class="btn btn-primary btn-sm enroll-program-btn" data-id="${p.id}" data-title="${p.title}">
            Enroll Now
          </button>
        </div>
      </div>
    `).join('');

    attachProgramEventListeners();
  }

  // Filter Tabs click
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPrograms(tab.getAttribute('data-filter'));
    });
  });

  renderPrograms();
}

function attachProgramEventListeners() {
  document.querySelectorAll('.open-syllabus-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const progId = btn.getAttribute('data-id');
      const program = window.VEDA_DATA.programs.find(p => p.id === progId);
      if (program) openSyllabusModal(program);
    });
  });

  document.querySelectorAll('.enroll-program-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      openApplicationModal(title, 'Training Program');
    });
  });
}

/* ==========================================================================
   7. IT & Digital Services Controller & Filtering
   ========================================================================== */
function initServices() {
  const container = document.getElementById('services-grid');
  const filterTabs = document.querySelectorAll('#services-filter .filter-tab');
  if (!container || !window.VEDA_DATA) return;

  const services = window.VEDA_DATA.services || [];

  function renderServices(filter = 'all') {
    const filtered = filter === 'all'
      ? services
      : services.filter(s => s.category === filter);

    container.innerHTML = filtered.map(s => `
      <div class="service-card" data-category="${s.category}">
        <div class="service-icon-box">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <div class="card-badge-row">
          <span class="chip-badge">${s.badge}</span>
        </div>
        <h3 class="card-title">${s.title}</h3>
        <p class="card-desc">${s.description}</p>
        
        <div class="service-deliverables">
          ${s.deliverables.map(d => `
            <div class="service-deliverable-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${d}</span>
            </div>
          `).join('')}
        </div>

        <div class="card-footer" style="margin-top: auto; padding-top: 1.5rem;">
          <button class="btn btn-outline btn-sm request-service-btn" data-title="${s.title}" style="width: 100%;">
            Request Proposal & Quote &rarr;
          </button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.request-service-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        openApplicationModal(title, 'IT & Digital Service');
      });
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderServices(tab.getAttribute('data-filter'));
    });
  });

  renderServices();
}

/* ==========================================================================
   8. Internship Controller
   ========================================================================== */
function initInternships() {
  const container = document.getElementById('internships-grid');
  if (!container || !window.VEDA_DATA) return;

  const internships = window.VEDA_DATA.internships || [];

  container.innerHTML = internships.map(item => `
    <div class="card">
      <div class="card-top">
        <div class="card-badge-row">
          <span class="chip-badge">${item.badge}</span>
          <span class="chip-level">${item.track}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.description}</p>
        
        <div class="card-meta-list">
          <div class="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span><strong>Duration:</strong> ${item.duration}</span>
          </div>
          <div class="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            <span><strong>Stipend:</strong> ${item.stipend}</span>
          </div>
        </div>

        <div class="card-topic-tags">
          ${item.skills.map(s => `<span class="topic-tag">${s}</span>`).join('')}
        </div>
      </div>

      <div class="card-footer">
        <button class="btn btn-primary btn-sm apply-internship-btn" data-title="${item.title}" style="width: 100%;">
          Apply for Track &rarr;
        </button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.apply-internship-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      openApplicationModal(title, 'Internship Track');
    });
  });
}

/* ==========================================================================
   9. FAQ Accordion & Search Filter
   ========================================================================== */
function initFAQs() {
  const container = document.getElementById('faq-accordion-list');
  const searchInput = document.getElementById('faq-search');
  const filterTabs = document.querySelectorAll('#faq-filter .filter-tab');
  if (!container || !window.VEDA_DATA) return;

  const faqs = window.VEDA_DATA.faqs || [];
  let currentFilter = 'all';
  let searchQuery = '';

  function renderFAQs() {
    let filtered = faqs;

    if (currentFilter !== 'all') {
      filtered = filtered.filter(f => f.category === currentFilter);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(f => 
        f.question.toLowerCase().includes(q) || 
        f.answer.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2.5rem; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg);">
          <p>No matching questions found for "<strong>${escapeHTML(searchQuery)}</strong>".</p>
          <button class="btn btn-outline btn-sm" id="reset-faq-btn" style="margin-top: 1rem;">Reset Filter</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-faq-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          searchQuery = '';
          currentFilter = 'all';
          filterTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-filter') === 'all'));
          renderFAQs();
        });
      }
      return;
    }

    container.innerHTML = filtered.map((f, idx) => `
      <div class="accordion-item ${idx === 0 ? 'active' : ''}" data-id="${f.id}">
        <button class="accordion-header" aria-expanded="${idx === 0 ? 'true' : 'false'}">
          <span>${f.question}</span>
          <div class="accordion-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </button>
        <div class="accordion-collapse">
          <div class="accordion-body">
            <p>${f.answer}</p>
          </div>
        </div>
      </div>
    `).join('');

    attachAccordionEvents();
  }

  function attachAccordionEvents() {
    const items = container.querySelectorAll('.accordion-item');
    items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close other accordion items for clean accordion behavior
        items.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            other.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
          }
        });

        if (isActive) {
          item.classList.remove('active');
          header.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderFAQs();
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-filter');
      renderFAQs();
    });
  });

  renderFAQs();
}

/* ==========================================================================
   10. Testimonials Controller
   ========================================================================== */
function initTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container || !window.VEDA_DATA) return;

  const testimonials = window.VEDA_DATA.testimonials || [];

  container.innerHTML = testimonials.map(item => `
    <div class="testimonial-card">
      <div>
        <div class="rating-stars">
          ${Array(item.rating).fill(`
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          `).join('')}
        </div>
        <p class="testimonial-text">"${item.content}"</p>
      </div>

      <div class="testimonial-user">
        <div class="avatar-circle">${item.avatar}</div>
        <div>
          <div class="user-name">${item.name}</div>
          <div class="user-role">${item.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   11. Spotlight Global Search (Ctrl+K)
   ========================================================================== */
function initSpotlightSearch() {
  const spotlightTrigger = document.getElementById('spotlight-trigger');
  const overlay = document.getElementById('spotlight-modal');
  const input = document.getElementById('spotlight-input');
  const resultsContainer = document.getElementById('spotlight-results');
  const closeBtn = document.getElementById('spotlight-close');

  if (!overlay || !input || !resultsContainer) return;

  function openSpotlight() {
    overlay.classList.add('open');
    input.value = '';
    input.focus();
    renderSpotlightResults('');
    document.body.style.overflow = 'hidden';
  }

  function closeSpotlight() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  spotlightTrigger?.addEventListener('click', openSpotlight);
  closeBtn?.addEventListener('click', closeSpotlight);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSpotlight();
  });

  // Global Ctrl+K shortcut
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (overlay.classList.contains('open')) {
        closeSpotlight();
      } else {
        openSpotlight();
      }
    }
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeSpotlight();
    }
  });

  input.addEventListener('input', (e) => {
    renderSpotlightResults(e.target.value);
  });

  function renderSpotlightResults(query) {
    if (!window.VEDA_DATA) return;
    const q = query.toLowerCase().trim();

    const matches = [];

    // Search Programs
    window.VEDA_DATA.programs?.forEach(p => {
      if (!q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
        matches.push({ title: p.title, type: 'Program', link: '#programs', item: p });
      }
    });

    // Search Services
    window.VEDA_DATA.services?.forEach(s => {
      if (!q || s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) {
        matches.push({ title: s.title, type: 'Service', link: '#services', item: s });
      }
    });

    // Search Internships
    window.VEDA_DATA.internships?.forEach(i => {
      if (!q || i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)) {
        matches.push({ title: i.title, type: 'Internship', link: '#internships', item: i });
      }
    });

    // Search FAQs
    window.VEDA_DATA.faqs?.forEach(f => {
      if (!q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)) {
        matches.push({ title: f.question, type: 'FAQ', link: '#faqs', item: f });
      }
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
          No results found for "${escapeHTML(query)}"
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.slice(0, 8).map(m => `
      <div class="spotlight-item" data-link="${m.link}">
        <div>
          <div class="spotlight-item-title">${m.title}</div>
        </div>
        <span class="spotlight-item-badge">${m.type}</span>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.spotlight-item').forEach(item => {
      item.addEventListener('click', () => {
        const link = item.getAttribute('data-link');
        closeSpotlight();
        const target = document.querySelector(link);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}

/* ==========================================================================
   12. Modals Management (Syllabus & Application Modals)
   ========================================================================== */
function initModals() {
  const syllabusModal = document.getElementById('syllabus-modal');
  const appModal = document.getElementById('app-modal');

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-overlay')?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  [syllabusModal, appModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });
}

function openSyllabusModal(program) {
  const modal = document.getElementById('syllabus-modal');
  const titleEl = document.getElementById('syllabus-title');
  const bodyEl = document.getElementById('syllabus-body');
  if (!modal || !titleEl || !bodyEl) return;

  titleEl.textContent = program.title;
  bodyEl.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="chip-badge">${program.badge}</span>
      <span style="font-size: 0.85rem; color: var(--text-muted); margin-left: 0.5rem;">${program.duration} • ${program.mode}</span>
    </div>
    
    <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Overview</h4>
    <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">${program.description}</p>

    <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem;">Complete Curriculum Modules</h4>
    <ul style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.5rem;">
      ${program.topics.map((t, idx) => `
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.9rem; color: var(--text-secondary);">
          <span style="width: 24px; height: 24px; border-radius: 50%; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0;">${idx + 1}</span>
          <span>${t}</span>
        </li>
      `).join('')}
    </ul>

    <div style="background: var(--bg-tertiary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1.5rem;">
      <h5 style="font-size: 0.95rem; margin-bottom: 0.35rem;">Prerequisites</h5>
      <p style="font-size: 0.875rem; color: var(--text-muted);">${program.prerequisites}</p>
      
      <h5 style="font-size: 0.95rem; margin-top: 0.75rem; margin-bottom: 0.35rem;">Certificate Awarded</h5>
      <p style="font-size: 0.875rem; color: var(--primary); font-weight: 600;">${program.certification}</p>
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 1rem;">
      <button class="btn btn-secondary btn-sm" onclick="document.getElementById('syllabus-modal').classList.remove('open'); document.body.style.overflow=''">Close</button>
      <button class="btn btn-primary btn-sm" onclick="document.getElementById('syllabus-modal').classList.remove('open'); openApplicationModal('${program.title}', 'Training Program')">Enroll in Program</button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openApplicationModal(interestItem, category) {
  const modal = document.getElementById('app-modal');
  const titleEl = document.getElementById('app-modal-title');
  const selectEl = document.getElementById('app-interest-select');
  if (!modal || !titleEl) return;

  titleEl.textContent = `Apply / Inquire: ${interestItem}`;
  if (selectEl) {
    selectEl.value = interestItem;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   13. Form Validation & Toast Feedback
   ========================================================================== */
function initForms() {
  // Main Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(contactForm)) {
        const name = contactForm.querySelector('#contact-name')?.value;
        showToast(`Thank you, ${name}! Your inquiry has been submitted. Our team will contact you within 24 hours.`, 'success');
        contactForm.reset();
      }
    });
  }

  // Application Modal Form
  const appForm = document.getElementById('app-form');
  if (appForm) {
    appForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(appForm)) {
        showToast(`Application successfully received! Confirmation sent to your email.`, 'success');
        appForm.reset();
        document.getElementById('app-modal')?.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Footer Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && isValidEmail(emailInput.value)) {
        showToast('Subscribed! Welcome to the Veda Technology tech digest.', 'success');
        emailInput.value = '';
      } else {
        showToast('Please enter a valid email address.', 'error');
      }
    });
  }
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('[required]');

  inputs.forEach(input => {
    const errorMsg = input.parentElement.querySelector('.form-error-msg');
    let hasError = false;

    if (!input.value.trim()) {
      hasError = true;
    } else if (input.type === 'email' && !isValidEmail(input.value)) {
      hasError = true;
    } else if (input.type === 'tel' && input.value.trim().length < 8) {
      hasError = true;
    }

    if (hasError) {
      isValid = false;
      input.classList.add('error');
      if (errorMsg) errorMsg.classList.add('visible');
    } else {
      input.classList.remove('error');
      if (errorMsg) errorMsg.classList.remove('visible');
    }

    input.addEventListener('input', () => {
      input.classList.remove('error');
      if (errorMsg) errorMsg.classList.remove('visible');
    }, { once: true });
  });

  return isValid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' 
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `
    ${icon}
    <div class="toast-message">${escapeHTML(message)}</div>
    <button style="color: var(--text-muted); cursor: pointer; padding: 2px;" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Export for global helper invocation
window.openApplicationModal = openApplicationModal;
