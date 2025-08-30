// scrollEffects.js
// Scroll reveal animations
function initScrollReveal() {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    sr.reveal('.section-title', { origin: 'top' });
    sr.reveal('.skill-item', { interval: 100 });
    sr.reveal('.project-card', { interval: 200 });
    sr.reveal('.timeline-item', { interval: 150 });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize all scroll effects
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initSmoothScroll();
});