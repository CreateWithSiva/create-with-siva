/* ==========================================================================
   CREATE WITH SIVA — SCRIPT
   Table of Contents:
   1.  Mobile Navigation Toggle
   2.  Sticky Header Scroll State
   3.  Active Nav Link On Scroll
   4.  Scroll Reveal Animation
   5.  Portfolio Filter
   6.  Before & After Slider
   7.  Workflow / Pricing Region Tabs
   8.  FAQ Accordion
   9.  Back To Top Button
   10. Footer Year
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ========================================================================
     1. MOBILE NAVIGATION TOGGLE
     ==================================================================== */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the mobile menu whenever a nav link is tapped
    navMenu.querySelectorAll('.nav-link, .nav-cta-wrap a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  /* ========================================================================
     2. STICKY HEADER SCROLL STATE
     ==================================================================== */
  const siteHeader = document.getElementById('site-header');
  let lastScrollY = window.scrollY;

  const updateHeaderState = () => {
    if (!siteHeader) return;
    if (window.scrollY > 20) {
      siteHeader.style.boxShadow = '0 8px 30px rgba(0,0,0,0.35)';
    } else {
      siteHeader.style.boxShadow = 'none';
    }
    lastScrollY = window.scrollY;
  };
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();


  /* ========================================================================
     3. ACTIVE NAV LINK ON SCROLL
     ==================================================================== */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach((section) => navObserver.observe(section));


  /* ========================================================================
     4. SCROLL REVEAL ANIMATION
     ==================================================================== */
  const revealTargets = document.querySelectorAll(
    '.section-heading, .service-card, .category-chip, .portfolio-item, ' +
    '.ba-card, .timeline-step, .price-card, .bundle-card, .why-card, ' +
    '.accordion-item, .contact-card, .trust-item'
  );

  revealTargets.forEach((el) => el.setAttribute('data-reveal', ''));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));


  /* ========================================================================
     5. PORTFOLIO FILTER
     ==================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterButtons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      portfolioItems.forEach((item) => {
        const category = item.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;
        item.classList.toggle('is-hidden', !shouldShow);
      });
    });
  });


  /* ========================================================================
     6. BEFORE & AFTER SLIDER
     ==================================================================== */
  const baCards = document.querySelectorAll('[data-ba]');

  baCards.forEach((card) => {
    const range = card.querySelector('.ba-range');
    const afterWrap = card.querySelector('.ba-img-after-wrap');
    const handle = card.querySelector('.ba-handle');
    if (!range || !afterWrap || !handle) return;

    const updateSlider = (value) => {
      afterWrap.style.width = `${value}%`;
      handle.style.left = `${value}%`;
    };

    range.addEventListener('input', (e) => updateSlider(e.target.value));
    updateSlider(range.value); // set initial position
  });


  /* ========================================================================
     7. PRICING REGION TABS
     ==================================================================== */
  const pricingTabs = document.querySelectorAll('.pricing-tab');
  const pricingPanels = document.querySelectorAll('.pricing-panel');

  pricingTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const region = tab.getAttribute('data-region');

      pricingTabs.forEach((t) => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      pricingPanels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.getAttribute('data-region-panel') === region);
      });
    });
  });


  /* ========================================================================
     8. FAQ ACCORDION
     ==================================================================== */
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach((trigger) => {
    const panel = trigger.nextElementSibling;

    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // Close all other panels (single-open accordion)
      accordionTriggers.forEach((otherTrigger) => {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
          const otherPanel = otherTrigger.nextElementSibling;
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      trigger.setAttribute('aria-expanded', String(!isOpen));
      if (panel) {
        panel.style.maxHeight = isOpen ? null : `${panel.scrollHeight}px`;
      }
    });
  });


  /* ========================================================================
     9. BACK TO TOP BUTTON
     ==================================================================== */
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    const toggleBackToTop = () => {
      backToTopBtn.classList.toggle('is-visible', window.scrollY > 600);
    };
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ========================================================================
     10. FOOTER YEAR
     ==================================================================== */
  const footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

});
