/**
 * Game Designer Portfolio - Main Application Controller
 * Tailored for Deep Tanush showcasing UI (Unwanted Internship)
 */

class PortfolioApp {
  constructor() {
    this.currentView = 'works';
    this.currentProjectId = null;
    this.debugMode = localStorage.getItem('gd_debug_mode') === 'true';

    this.init();
  }

  init() {
    this.populateHeaderInfo();
    this.renderWorksView();
    this.setupEventListeners();
    this.handleInitialRoute();
    this.applyDebugMode(this.debugMode);
    this.setupAudioTriggers();
  }

  populateHeaderInfo() {
    document.querySelectorAll('[data-bind="designerName"]').forEach(el => {
      el.textContent = PORTFOLIO_CONFIG.designerName;
    });
    document.querySelectorAll('[data-bind="designerTitle"]').forEach(el => {
      el.textContent = PORTFOLIO_CONFIG.designerTitle;
    });
    document.querySelectorAll('[data-bind="selectedWorksSubtitle"]').forEach(el => {
      el.textContent = PORTFOLIO_CONFIG.selectedWorksSubtitle;
    });
    document.querySelectorAll('[data-bind="aboutShort"]').forEach(el => {
      el.textContent = PORTFOLIO_CONFIG.aboutShort;
    });

    const emailLink = document.getElementById('contact-email-link');
    if (emailLink) {
      emailLink.href = `mailto:${PORTFOLIO_CONFIG.contacts.email}`;
      emailLink.textContent = PORTFOLIO_CONFIG.contacts.email;
    }
  }

  renderWorksView() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const project = PROJECTS_DATA[0]; // UI (Unwanted Internship)

    grid.innerHTML = `
      <!-- Flagship Command Hero Card -->
      <section class="flagship-hero-card" data-project-id="${project.id}">
        <div class="flagship-card-inner">
          
          <!-- Top Game Header Bar -->
          <div class="card-game-bar">
            <span class="card-stage-tag">
              <span class="tag-gem">◆</span> FEATURED FLAGSHIP // ${project.engineBadge}
            </span>
            <span class="flagship-rating-badge">PLAYABLE ON ITCH.IO</span>
          </div>

          <!-- Media & Thumbnail Container -->
          <div class="flagship-media-wrapper lightbox-trigger" data-full="${project.heroImage}" data-caption="${project.heroCaption}">
            <img 
              src="${project.thumbnail}" 
              alt="${project.title} Hero Screenshot" 
              class="flagship-thumb-img" 
              loading="eager"
            />
            <div class="thumb-overlay"></div>
            
            <!-- Corner Notches -->
            <div class="thumb-corner top-left"></div>
            <div class="thumb-corner top-right"></div>
            <div class="thumb-corner bottom-left"></div>
            <div class="thumb-corner bottom-right"></div>

            <div class="flagship-hover-prompt">
              <span class="pill-gem">◆</span>
              <span>EXPAND SCREENSHOT [ZOOM]</span>
            </div>
          </div>

          <!-- Information & Action Shelf -->
          <div class="flagship-content-shelf">
            <div class="flagship-titles">
              <div class="flagship-genre-tag">${project.category.toUpperCase()}</div>
              <h2 class="flagship-main-title">${project.title}</h2>
              <p class="flagship-tagline">A 3D sci-fi puzzle mystery of logic, mechanics, and drone exploration.</p>
            </div>

            <!-- Metadata Specs Row -->
            <div class="flagship-specs-row">
              <div class="spec-pill">
                <span class="spec-label">ROLE</span>
                <span class="spec-val">${project.meta.role}</span>
              </div>
              <div class="spec-pill">
                <span class="spec-label">TEAM</span>
                <span class="spec-val">5 Developers</span>
              </div>
              <div class="spec-pill">
                <span class="spec-label">ENGINE</span>
                <span class="spec-val">${project.meta.engine}</span>
              </div>
              <div class="spec-pill">
                <span class="spec-label">PLATFORM</span>
                <span class="spec-val">Windows PC</span>
              </div>
            </div>

            <!-- Action Buttons Row -->
            <div class="flagship-actions-row">
              <button class="game-action-btn primary btn-open-case-study" data-project-id="${project.id}">
                <span class="btn-pip">◆</span>
                <span>VIEW COMPLETE CASE STUDY</span>
                <span class="btn-arrow">→</span>
              </button>
              <a href="${project.itchUrl}" target="_blank" rel="noopener" class="game-action-btn secondary">
                <span>PLAY ON ITCH.IO</span>
                <span class="btn-arrow">↗</span>
              </a>
              <a href="https://www.youtube.com/watch?v=KvcdGrKK1Cc" target="_blank" rel="noopener" class="game-action-btn secondary">
                <span>WATCH TRAILER</span>
                <span class="btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Multi-Timeline Level Architecture Showcase -->
      <section class="timelines-showcase-section">
        <div class="section-divider-bar">
          <span class="divider-gem">◆</span>
          <span class="divider-title">LEVEL DESIGN // THREE CHRONOLOGICAL CHAMBERS</span>
          <span class="divider-line"></span>
        </div>

        <div class="timelines-grid">
          ${TIMELINE_CHAMBERS.map(tl => `
            <div class="timeline-card lightbox-trigger" data-full="${tl.image}" data-caption="${tl.title} — ${tl.description}">
              <div class="timeline-img-box">
                <img src="${tl.image}" alt="${tl.title}" class="timeline-img" loading="lazy" />
                <div class="timeline-tag">${tl.number}</div>
                <div class="thumb-corner top-left"></div>
                <div class="thumb-corner top-right"></div>
                <div class="thumb-corner bottom-left"></div>
                <div class="thumb-corner bottom-right"></div>
              </div>
              <div class="timeline-info">
                <h4 class="timeline-card-title">${tl.title}</h4>
                <p class="timeline-role-note">${tl.roleNote}</p>
                <p class="timeline-card-desc">${tl.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Trailer & Player Critical Reception Grid -->
      <section class="gameplay-spotlight-section">
        <div class="section-divider-bar">
          <span class="divider-gem">◆</span>
          <span class="divider-title">GAMEPLAY TRAILER & PLAYTEST IMPRESSIONS</span>
          <span class="divider-line"></span>
        </div>

        <div class="spotlight-dual-grid">
          <!-- Trailer Video Embed / Interactive Reel -->
          <div class="trailer-embed-card">
            <div class="card-game-bar">
              <span class="card-stage-tag"><span class="tag-gem">◆</span> OFFICIAL GAMEPLAY TRAILER</span>
              <span class="trailer-badge">HD // 60 FPS</span>
            </div>
            <div class="video-aspect-frame" id="trailer-frame-container">
              <div class="trailer-poster" style="background-image: url('assets/images/ui-screenshot-7.png');">
                <div class="poster-overlay"></div>
                <a href="https://www.youtube.com/watch?v=KvcdGrKK1Cc" target="_blank" rel="noopener" class="trailer-play-btn" aria-label="Play Trailer on YouTube">
                  <span class="play-triangle">▶</span>
                  <span class="play-text">WATCH TRAILER ON YOUTUBE</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Real Itch.io Review & Design Pillars -->
          <div class="reception-card">
            <div class="card-game-bar">
              <span class="card-stage-tag"><span class="tag-gem">◆</span> PLAYTEST FEEDBACK</span>
              <span class="stars-gold">PLAYER IMPRESSION</span>
            </div>
            
            <div class="reception-body">
              <blockquote class="review-quote">
                "The gameplay was really good! The puzzles were genuinely intriguing and well thought out. I was impressed by one puzzle in particular where you had to take a reference from a UI component to figure out the solution—such a clever way of designing a puzzle. Overall, programming, art, and design came together really well."
              </blockquote>
              <div class="review-author-line">
                <span class="author-pip">―</span> Verified Playtest Review on Itch.io
              </div>

              <!-- Game Pillars -->
              <div class="design-pillars-shelf">
                <div class="pillar-box">
                  <span class="pillar-val">90%</span>
                  <span class="pillar-label">Bespoke 3D Assets (No Generative AI)</span>
                </div>
                <div class="pillar-box">
                  <span class="pillar-val">3 Eras</span>
                  <span class="pillar-label">Chronological Relic Chambers</span>
                </div>
                <div class="pillar-box">
                  <span class="pillar-val">AI Drone</span>
                  <span class="pillar-label">Tactile Exploration Mechanics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Gallery Reel -->
      <section class="gallery-reel-section">
        <div class="section-divider-bar">
          <span class="divider-gem">◆</span>
          <span class="divider-title">DEVELOPER ENVIRONMENT ARCHIVE</span>
          <span class="divider-line"></span>
        </div>
        <div class="gallery-reel-grid">
          ${project.gameplay.media.map(m => `
            <div class="gallery-reel-item lightbox-trigger" data-full="${m.src}" data-caption="${m.caption}">
              <img src="${m.src}" alt="${m.caption}" class="gallery-reel-img" loading="lazy" />
              <div class="gallery-hover-badge"><span>INSPECT [◆]</span></div>
              <p class="gallery-reel-caption">${m.caption}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    // Hook click to open case study
    grid.querySelectorAll('.btn-open-case-study').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-project-id');
        this.openProject(id);
      });
    });

    this.setupLightboxTriggers();
    this.setupAudioTriggers();
  }

  openProject(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId) || PROJECTS_DATA[0];
    this.currentProjectId = project.id;
    window.location.hash = `project/${project.id}`;
    window.GameAudio.playSelect();

    const detailContainer = document.getElementById('project-detail-view');
    const worksView = document.getElementById('works-view');
    const aboutView = document.getElementById('about-view');
    const resumeView = document.getElementById('resume-view');
    const contactView = document.getElementById('contact-view');

    detailContainer.innerHTML = `
      <div class="project-page-container">
        <!-- Top Navigation Bar -->
        <div class="project-page-topbar">
          <button class="back-to-works-btn" id="btn-back-works" aria-label="Back to projects">
            <span class="back-arrow">←</span>
            <span>RETURN TO WORKS</span>
            <kbd class="key-hint">ESC</kbd>
          </button>
          
          <div class="project-page-breadcrumbs">
            <span>SELECTED WORKS</span>
            <span class="sep">/</span>
            <span class="curr">${project.title}</span>
          </div>
        </div>

        <!-- Project Hero Header -->
        <header class="project-page-header">
          <div class="project-category-tag">
            <span class="gem-pip">◆</span>
            <span>${project.category.toUpperCase()} // ${project.year}</span>
          </div>
          <h1 class="project-page-title">${project.title}</h1>
          <p class="project-subtitle-lead">A 3D sci-fi puzzle mystery of logic, mechanics, and drone exploration.</p>
        </header>

        <!-- Large Hero Image -->
        <div class="project-hero-media">
          <div class="hero-image-wrapper lightbox-trigger" data-full="${project.heroImage}" data-caption="${project.heroCaption}">
            <img src="${project.heroImage}" alt="${project.title} Hero Visual" class="project-hero-img" />
            
            <div class="thumb-corner top-left"></div>
            <div class="thumb-corner top-right"></div>
            <div class="thumb-corner bottom-left"></div>
            <div class="thumb-corner bottom-right"></div>

            <div class="inspect-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
              </svg>
              <span>INSPECT SCREENSHOT</span>
            </div>
          </div>
          <p class="media-caption">${project.heroCaption}</p>
        </div>

        <!-- Information Row: ROLE, TEAM, ENGINE, GENRE -->
        <div class="project-info-row">
          <div class="info-cell">
            <span class="info-label">ROLE</span>
            <span class="info-value">${project.meta.role}</span>
          </div>
          <div class="info-cell">
            <span class="info-label">TEAM</span>
            <span class="info-value">${project.meta.team}</span>
          </div>
          <div class="info-cell">
            <span class="info-label">ENGINE</span>
            <span class="info-value">${project.meta.engine}</span>
          </div>
          <div class="info-cell">
            <span class="info-label">GENRE</span>
            <span class="info-value">${project.meta.genre}</span>
          </div>
        </div>

        <!-- Detailed Sections Content -->
        <div class="project-sections-content">
          
          <!-- OVERVIEW Section -->
          <section class="doc-section">
            <div class="section-badge"><span class="gem-pip">◆</span> 01 // OVERVIEW</div>
            <h2 class="doc-section-title">OVERVIEW</h2>
            <p class="section-body-text">${project.overview}</p>
          </section>

          <!-- MY DESIGN Section -->
          <section class="doc-section">
            <div class="section-badge"><span class="gem-pip">◆</span> 02 // MY DESIGN</div>
            <h2 class="doc-section-title">MY DESIGN</h2>
            <p class="section-body-text">${project.myDesign}</p>
          </section>

          <!-- GAMEPLAY Section -->
          <section class="doc-section">
            <div class="section-badge"><span class="gem-pip">◆</span> 03 // GAMEPLAY</div>
            <h2 class="doc-section-title">GAMEPLAY</h2>
            <p class="section-body-text">${project.gameplay.summary}</p>
            
            <ul class="design-feature-list">
              ${project.gameplay.highlights.map(h => `<li><span class="list-bullet">›</span> ${h}</li>`).join('')}
            </ul>

            <div class="media-grid">
              ${project.gameplay.media.slice(0, 3).map(m => `
                <div class="media-card lightbox-trigger" data-full="${m.src}" data-caption="${m.caption}">
                  <img src="${m.src}" alt="Gameplay Screenshot" class="media-card-img" />
                  <div class="inspect-badge"><span>EXPAND [ZOOM]</span></div>
                  <p class="media-caption">${m.caption}</p>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- LEVEL DESIGN Section -->
          <section class="doc-section">
            <div class="section-badge"><span class="gem-pip">◆</span> 04 // LEVEL DESIGN</div>
            <h2 class="doc-section-title">LEVEL DESIGN</h2>
            <p class="section-body-text">${project.levelDesign.summary}</p>

            <ul class="design-feature-list">
              ${project.levelDesign.highlights.map(h => `<li><span class="list-bullet">›</span> ${h}</li>`).join('')}
            </ul>

            <div class="media-grid blueprint-grid">
              ${project.levelDesign.media.map(m => `
                <div class="media-card blueprint-card lightbox-trigger" data-full="${m.src}" data-caption="${m.caption}">
                  <div class="blueprint-tag">◆ LEVEL ARCHITECTURE SCHEMATIC</div>
                  <img src="${m.src}" alt="Level Design Blueprint" class="media-card-img" />
                  <div class="inspect-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
                    <span>INSPECT SCHEMATIC</span>
                  </div>
                  <p class="media-caption">${m.caption}</p>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- PROCESS Section -->
          <section class="doc-section">
            <div class="section-badge"><span class="gem-pip">◆</span> 05 // PROCESS</div>
            <h2 class="doc-section-title">PROCESS</h2>
            <p class="section-body-text">${project.process.summary}</p>
            
            <ul class="design-feature-list">
              ${project.process.highlights.map(h => `<li><span class="list-bullet">›</span> ${h}</li>`).join('')}
            </ul>
          </section>

          <!-- FINAL RESULT Section -->
          <section class="doc-section">
            <div class="section-badge"><span class="gem-pip">◆</span> 06 // FINAL RESULT</div>
            <h2 class="doc-section-title">FINAL RESULT</h2>
            <p class="section-body-text">${project.finalResult.summary}</p>

            <div class="metrics-grid">
              ${project.finalResult.metrics.map(met => `
                <div class="metric-card">
                  <span class="metric-value">${met.value}</span>
                  <span class="metric-label">${met.label}</span>
                </div>
              `).join('')}
            </div>

            <div class="project-action-links">
              ${project.finalResult.links.map(link => `
                <a href="${link.url}" class="game-action-btn primary" target="_blank" rel="noopener">
                  <span>${link.label}</span>
                  <span class="btn-arrow">↗</span>
                </a>
              `).join('')}
            </div>
          </section>
        </div>

        <!-- Bottom Return Button -->
        <nav class="project-pagination single-project-nav">
          <button class="nav-all-project" id="btn-pagination-all">
            <span class="nav-dir">RETURN TO INDEX</span>
            <span class="nav-name">← BACK TO SELECTED WORKS</span>
          </button>
        </nav>
      </div>
    `;

    worksView.classList.add('hidden');
    aboutView.classList.add('hidden');
    if (resumeView) resumeView.classList.add('hidden');
    contactView.classList.add('hidden');
    detailContainer.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'instant' });

    document.getElementById('btn-back-works').addEventListener('click', () => {
      this.closeProject();
    });
    document.getElementById('btn-pagination-all').addEventListener('click', () => {
      this.closeProject();
    });

    this.setupLightboxTriggers();
    this.setupAudioTriggers();
  }

  closeProject() {
    window.location.hash = 'works';
    this.currentProjectId = null;
    window.GameAudio.playClose();

    const detailContainer = document.getElementById('project-detail-view');
    const worksView = document.getElementById('works-view');

    detailContainer.classList.add('hidden');
    detailContainer.innerHTML = '';
    worksView.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  switchTab(tabName) {
    if (this.currentProjectId) {
      document.getElementById('project-detail-view').classList.add('hidden');
      document.getElementById('project-detail-view').innerHTML = '';
      this.currentProjectId = null;
    }

    const views = {
      works: document.getElementById('works-view'),
      about: document.getElementById('about-view'),
      resume: document.getElementById('resume-view'),
      contact: document.getElementById('contact-view')
    };

    Object.keys(views).forEach(key => {
      if (views[key]) {
        if (key === tabName) {
          views[key].classList.remove('hidden');
        } else {
          views[key].classList.add('hidden');
        }
      }
    });

    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    this.currentView = tabName;
    window.location.hash = tabName;
    window.GameAudio.playSelect();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleInitialRoute() {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('project/')) {
      this.openProject(hash.replace('project/', ''));
    } else if (hash === 'about') {
      this.switchTab('about');
    } else if (hash === 'resume') {
      this.switchTab('resume');
    } else if (hash === 'contact') {
      this.switchTab('contact');
    } else {
      this.switchTab('works');
    }
  }

  setupEventListeners() {
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    document.querySelectorAll('.nav-to-resume-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchTab('resume');
      });
    });

    const muteBtn = document.getElementById('audio-toggle-btn');
    if (muteBtn) {
      this.updateAudioButtonState(muteBtn);
      muteBtn.addEventListener('click', () => {
        const isMuted = window.GameAudio.toggleMute();
        this.updateAudioButtonState(muteBtn);
        if (!isMuted) window.GameAudio.playClick();
      });
    }

    const debugBtn = document.getElementById('debug-toggle-btn');
    if (debugBtn) {
      debugBtn.addEventListener('click', () => {
        this.debugMode = !this.debugMode;
        localStorage.setItem('gd_debug_mode', this.debugMode);
        this.applyDebugMode(this.debugMode);
        window.GameAudio.playClick();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox-modal');
        if (lightbox && !lightbox.classList.contains('hidden')) {
          this.closeLightbox();
        } else if (this.currentProjectId) {
          this.closeProject();
        }
      }
    });

    window.addEventListener('hashchange', () => {
      this.handleInitialRoute();
    });

    const lightboxClose = document.getElementById('lightbox-close-btn');
    const lightboxModal = document.getElementById('lightbox-modal');
    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => this.closeLightbox());
    }
    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal || e.target.classList.contains('lightbox-dialog')) {
          this.closeLightbox();
        }
      });
    }

    const copyEmailBtn = document.getElementById('btn-copy-email');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(PORTFOLIO_CONFIG.contacts.email).then(() => {
          window.GameAudio.playClick();
          const origText = copyEmailBtn.innerHTML;
          copyEmailBtn.innerHTML = `<span>COPIED TO CLIPBOARD!</span>`;
          setTimeout(() => {
            copyEmailBtn.innerHTML = origText;
          }, 2000);
        });
      });
    }
  }

  setupAudioTriggers() {
    const interactiveElements = document.querySelectorAll(
      'button, a, .flagship-hero-card, .timeline-card, .gallery-reel-item, .lightbox-trigger, .nav-tab-btn'
    );
    interactiveElements.forEach(el => {
      if (el.dataset.audioBound) return;
      el.dataset.audioBound = 'true';

      el.addEventListener('mouseenter', () => {
        window.GameAudio.playHover();
      });
    });
  }

  setupLightboxTriggers() {
    document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const fullSrc = trigger.getAttribute('data-full');
        const caption = trigger.getAttribute('data-caption') || '';
        this.openLightbox(fullSrc, caption);
      });
    });
  }

  openLightbox(src, caption) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const captionEl = document.getElementById('lightbox-caption');

    if (!modal || !img) return;

    img.src = src;
    captionEl.textContent = caption;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    window.GameAudio.playSelect();
  }

  closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    window.GameAudio.playClose();
  }

  updateAudioButtonState(btn) {
    const isMuted = window.GameAudio.isMuted();
    btn.innerHTML = isMuted ? `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/>
      </svg>
      <span class="btn-text">SFX: OFF</span>
    ` : `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
      </svg>
      <span class="btn-text">SFX: ON</span>
    `;
    btn.setAttribute('aria-pressed', !isMuted);
  }

  applyDebugMode(enable) {
    const body = document.body;
    const btn = document.getElementById('debug-toggle-btn');
    if (enable) {
      body.classList.add('game-hud-active');
      if (btn) btn.classList.add('active');
    } else {
      body.classList.remove('game-hud-active');
      if (btn) btn.classList.remove('active');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.portfolioApp = new PortfolioApp();
});
