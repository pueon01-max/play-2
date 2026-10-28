document.addEventListener('DOMContentLoaded', () => {
  console.log('script loaded');

  /* =========================
     INTRO 튀어오르듯 등장
  ========================= */
  const introSection = document.querySelector('#introSection');

  if (introSection) {
    const introObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        introSection.classList.add('is-active');
        introObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.2
    });

    introObserver.observe(introSection);
  }

  /* =========================
     공통 섹션 리빌
  ========================= */
  const revealSections = document.querySelectorAll('.reveal-section');
  const bestItems = document.querySelectorAll('.best-item');

  if (revealSections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');

        if (entry.target.classList.contains('best-section')) {
          bestItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('is-visible');
            }, index * 180);
          });
        }

        sectionObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.16
    });

    revealSections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  /* =========================
     FEATURE 카드 스크롤텔링
  ========================= */
  const featureSection = document.querySelector('#featureSection');
  const revealCards = document.querySelectorAll('.reveal-card');

  if (featureSection && revealCards.length) {
    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        revealCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('is-visible');
          }, index * 220);
        });

        featureObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.22
    });

    featureObserver.observe(featureSection);
  }

  /* =========================
     APP ripple
  ========================= */
  if (window.jQuery && $('#appRippleBg').length) {
    try {
      $('#appRippleBg').ripples({
        resolution: 420,
        dropRadius: 16,
        perturbance: 0.012,
        interactive: true,
        crossOrigin: ''
      });

      const $ripple = $('#appRippleBg');

      setInterval(() => {
        const el = $ripple.get(0);
        if (!el) return;

        const w = el.clientWidth;
        const h = el.clientHeight;

        const x = w * (0.35 + Math.random() * 0.3);
        const y = h * (0.3 + Math.random() * 0.4);
        const radius = 10 + Math.random() * 10;
        const strength = 0.015 + Math.random() * 0.01;

        $ripple.ripples('drop', x, y, radius, strength);
      }, 1400);

    } catch (error) {
      console.error('ripples init failed:', error);
    }
  }
});