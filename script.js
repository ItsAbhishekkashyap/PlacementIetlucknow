
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

  
    function animateStats() {
      const statElements = document.querySelectorAll('.stat-number');
      statElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
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
     
      setTimeout(() => {
        document.querySelector('.slide-in-left').style.animationPlayState = 'running';
        document.querySelector('.slide-in-right').style.animationPlayState = 'running';
      }, 300);
    });


    document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById('logo-slider');
    const btnLeft = document.getElementById('scroll-left');
    const btnRight = document.getElementById('scroll-right');

    // 1. Clone content for the infinite effect
    const content = slider.innerHTML;
    slider.innerHTML += content; // Double the logos

    let isAutoScrolling = true;
    let scrollSpeed = 1; // 1 pixel per interval

    // 2. Auto Scroll Logic
    const startAutoScroll = () => {
        if (isAutoScrolling) {
            slider.scrollLeft += scrollSpeed;
            
            // Seamless reset: When halfway through (original content ends), jump back to start
            if (slider.scrollLeft >= slider.scrollWidth / 2) {
                slider.scrollLeft = 0;
            }
        }
    };

    let autoScrollInterval = setInterval(startAutoScroll, 20);

    // 3. Manual Button Click Logic
    const moveSlider = (direction) => {
        // Stop auto-scroll temporarily
        isAutoScrolling = false;
        
        const scrollAmount = 300; // Pixels to move
        slider.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });

        // Resume auto-scroll after a short delay
        setTimeout(() => {
            isAutoScrolling = true;
        }, 2000); 
    };

    btnRight.addEventListener('click', () => moveSlider('right'));
    btnLeft.addEventListener('click', () => moveSlider('left'));

    // 4. Pause on Hover
    slider.addEventListener('mouseenter', () => { isAutoScrolling = false; });
    slider.addEventListener('mouseleave', () => { isAutoScrolling = true; });
});


//infrastrucre code
document.addEventListener("DOMContentLoaded", () => {
    const infraSlider = document.getElementById('infra-slider');
    const infraNext = document.getElementById('infra-next');
    const infraPrev = document.getElementById('infra-prev');

    if (infraSlider && infraNext && infraPrev) {
        // Function to calculate scroll distance (card width + gap)
        const getScrollAmount = () => {
            const firstCard = infraSlider.querySelector('div');
            const style = window.getComputedStyle(infraSlider);
            const gap = parseInt(style.columnGap) || 0;
            return firstCard.offsetWidth + gap;
        };

        // Scroll Right
        infraNext.addEventListener('click', () => {
            const amount = getScrollAmount();
            // If at the end, loop back to start
            if (infraSlider.scrollLeft + infraSlider.offsetWidth >= infraSlider.scrollWidth - 10) {
                infraSlider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                infraSlider.scrollBy({ left: amount, behavior: 'smooth' });
            }
        });

        // Scroll Left
        infraPrev.addEventListener('click', () => {
            const amount = getScrollAmount();
            // If at the start, loop to end
            if (infraSlider.scrollLeft <= 0) {
                infraSlider.scrollTo({ left: infraSlider.scrollWidth, behavior: 'smooth' });
            } else {
                infraSlider.scrollBy({ left: -amount, behavior: 'smooth' });
            }
        });
    }
});