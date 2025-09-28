// Mobile menu toggle
    document.getElementById('mobile-open').addEventListener('click', function() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
      });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Animate statistics numbers
    function animateStats() {
      const statElements = document.querySelectorAll('.stat-number');
      statElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
          } else {
            element.textContent = Math.floor(current);
          }
        }, 16);
      });
    }

    // Initialize stats animation when stats section is in view
    const statsSection = document.getElementById('stats');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(statsSection);



     document.addEventListener('DOMContentLoaded', function() {
      // Add loaded class to trigger animations
      setTimeout(() => {
        document.querySelector('.slide-in-left').style.animationPlayState = 'running';
        document.querySelector('.slide-in-right').style.animationPlayState = 'running';
      }, 300);
    });