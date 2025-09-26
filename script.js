// GSAP and Framer Motion Animations
window.addEventListener('DOMContentLoaded', () => {
  // Header Navigation Smooth Scroll & Active Link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = this.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        const section = document.querySelector(target);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 40,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  // Hero Section Animations
  gsap.from('.main-header', {y: -60, opacity: 0, duration: 1, ease: 'power3.out'});
  gsap.from('.hero-left', {x: -80, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out'});
  gsap.from('.hero-center', {scale: 0.7, opacity: 0, duration: 1, delay: 0.5, ease: 'back.out(1.7)'});
  gsap.from('.hero-right', {x: 80, opacity: 0, duration: 1, delay: 0.7, ease: 'power3.out'});
  gsap.from('.hero-img-circle', {boxShadow: '0 0 0 #fff', duration: 1.2, delay: 0.6, ease: 'expo.out'});
  gsap.from('.hero-dash', {opacity: 0, duration: 1, delay: 1, ease: 'power2.out'});

  // About Section
  gsap.from('.about .bio', {y: 60, opacity: 0, duration: 1, delay: 0.2, ease: 'power2.out'});

  // Skills Section
  gsap.from('.skills h2', {opacity: 0, y: 40, duration: 0.7, delay: 0.2, ease: 'power2.out'});
  gsap.from('.skill-card', {opacity: 0, y: 40, duration: 0.7, stagger: 0.15, delay: 0.4, ease: 'power2.out'});

  // Projects Section
  gsap.from('.projects h2', {opacity: 0, y: 40, duration: 0.7, delay: 0.2, ease: 'power2.out'});
  gsap.from('.project', {opacity: 0, y: 40, duration: 0.7, stagger: 0.15, delay: 0.4, ease: 'power2.out'});

  // Contact Section
  gsap.from('.contact h2', {opacity: 0, y: 40, duration: 0.7, delay: 0.2, ease: 'power2.out'});
  gsap.from('.contact-form input, .contact-form textarea, .contact-form button', {opacity: 0, y: 30, duration: 0.7, stagger: 0.1, delay: 0.4, ease: 'power2.out'});
  gsap.from('.social-links a', {opacity: 0, y: 20, duration: 0.7, stagger: 0.1, delay: 0.7, ease: 'power2.out'});

  // Footer
  gsap.from('footer', {opacity: 0, y: 20, duration: 0.8, delay: 0.5, ease: 'power2.out'});

  // Skill Card Hover Animations
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {scale: 1.07, boxShadow: '0 8px 32px #4f8cff33', duration: 0.25, overwrite: 'auto'});
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {scale: 1, boxShadow: '0 4px 18px rgba(79,140,255,0.08)', duration: 0.22, overwrite: 'auto'});
    });
  });

  // Contact Form Animation
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    this.reset();
    gsap.to('.contact-form button', {scale: 1.2, duration: 0.2, yoyo: true, repeat: 1, ease: 'power1.inOut'});
    setTimeout(() => alert('Thank you for reaching out!'), 400);
  });
});
