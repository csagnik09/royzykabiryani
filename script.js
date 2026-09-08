// Header shadow on scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile nav: simple toggle that reveals nav links as a stacked panel
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.querySelector('nav.primary');
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.style.display === 'flex';
    if (isOpen) {
      primaryNav.style.display = 'none';
    } else {
      primaryNav.style.cssText = 'display:flex;position:fixed;top:64px;left:0;right:0;background:#1a120b;flex-direction:column;padding:20px 28px;gap:18px;border-bottom:1px solid rgba(245,234,217,0.14);';
    }
  });
  primaryNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 900) primaryNav.style.display = 'none';
    });
  });

  // Gallery lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  document.querySelectorAll('#galleryGrid img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });
  function closeLightbox(){ lightbox.classList.remove('open'); lightboxImg.src=''; }
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
