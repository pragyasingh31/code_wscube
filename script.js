
  // Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✅ Thank you for contacting Pizza Bytes! We will reach out soon.');
    contactForm.reset();
  });
}

// Scroll animation with Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

// Animate elements on scroll
document.querySelectorAll('.review-card, .menu-card, .deal-card, .why-card, .featured-slide, .location-card').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// Optional: Locate Me Button Demo (if exists)
const locateBtn = document.querySelector('.btn-locate');
if (locateBtn) {
  locateBtn.addEventListener('click', () => {
    alert("📍 Attempting to locate you... (This is a demo feature.)");
  });
}

// If you're using SwiperJS for pizza carousel
if (typeof Swiper !== 'undefined') {
  new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}
