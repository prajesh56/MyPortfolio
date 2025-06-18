// main.js
// Hamburger menu toggle logic
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById('scrollToTopBtn');

  // Show button after scrolling down 100px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollBtn.classList.remove('hidden');
    } else {
      scrollBtn.classList.add('hidden');
    }
  });

  // Smooth scroll to top on button click
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


  // Simple count-up animation for all elements with class 'counter'
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / 60); // Adjust speed here

        if(count < target) {
          counter.innerText = count + increment > target ? target : count + increment;
          setTimeout(updateCount, 16); // ~60fps
        } else {
          counter.innerText = target + '+';
        }
      };
      updateCount();
    });
  });

