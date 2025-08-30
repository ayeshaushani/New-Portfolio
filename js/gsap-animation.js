// gsap-animations.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero text animation
    gsap.from('.hero-title .title-line', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
        duration: 1,
        y: 20,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
    });

    gsap.from('.hero-buttons', {
        duration: 1,
        y: 20,
        opacity: 0,
        delay: 0.8,
        ease: 'power3.out'
    });

    // Highlight underline animation
    gsap.to('.highlight::after', {
        scaleX: 1,
        duration: 1.5,
        delay: 0.5,
        ease: 'elastic.out(1, 0.5)'
    });

    // Image parallax effect
    gsap.to('.parallax', {
        y: 50,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Shape animations
    gsap.to('.shape-1', {
        x: 20,
        y: 20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape-2', {
        x: -20,
        y: -20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Navbar animation on scroll
    ScrollTrigger.create({
        trigger: 'body',
        start: 'top -100',
        end: 'max',
        onUpdate: (self) => {
            if (self.direction === -1 && self.scroll() > 100) {
                gsap.to('.navbar', {
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else if (self.direction === 1 && self.scroll() > 100) {
                gsap.to('.navbar', {
                    y: -100,
                    duration: 0.3,
                    ease: 'power2.in'
                });
            }
        }
    });

    // Scroll down arrow animation
    gsap.to('.scroll-animation span', {
        y: 5,
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
});