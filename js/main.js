document.addEventListener('DOMContentLoaded', () => {
  // --- Language Toggle Logic ---
  const langToggleBtn = document.getElementById('lang-toggle');
  
  // Set initial language from localStorage or default to 'en'
  const currentLang = localStorage.getItem('portfolio-lang') || 'en';
  document.body.classList.add(`lang-${currentLang}`);
  
  if (langToggleBtn) {
    // If it's currently English, button says 'PT'. If it's Portuguese, button says 'EN'.
    langToggleBtn.textContent = currentLang === 'en' ? 'PT' : 'EN';
    
    langToggleBtn.addEventListener('click', () => {
      const isEnglish = document.body.classList.contains('lang-en');
      const newLang = isEnglish ? 'pt' : 'en';
      
      document.body.classList.remove('lang-en', 'lang-pt');
      document.body.classList.add(`lang-${newLang}`);
      localStorage.setItem('portfolio-lang', newLang);
      
      langToggleBtn.textContent = newLang === 'en' ? 'PT' : 'EN';
    });
  }

  // --- Reveal animations on scroll ---
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger on load

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }

  // Slogan crossfade animation on the cover
  const quote1 = document.querySelector('.quote-1');
  const quote2 = document.querySelector('.quote-2');
  
  if (quote1 && quote2) {
    // Wait 2.5 seconds before starting the transition to let the user read the first question
    setTimeout(() => {
      quote1.classList.add('fade-out');
      quote2.classList.add('fade-in');
    }, 2500);
  }

  // Subtle interactive background flow lines
  const bgFlow = document.querySelector('.bg-flow');
  if (bgFlow) {
    document.addEventListener('mousemove', (e) => {
      // Calculate mouse position relative to the center of the screen
      const x = (window.innerWidth / 2 - e.pageX) * 0.03;
      const y = (window.innerHeight / 2 - e.pageY) * 0.03;
      
      // Apply a very subtle translate
      bgFlow.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
});
