// Cursor Effects
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Hover effects for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .btn, .card-hover, .nav-link');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);

    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');

    // Animate links
    if (navLinks.classList.contains('nav-active')) {
        gsap.from('.nav-link', {
            x: -50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power3.out'
        });
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

// Text reveal animation for headings
function animateTextReveal() {
    document.querySelectorAll('.text-reveal').forEach(el => {
        const text = el.textContent;
        el.innerHTML = '';

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            el.appendChild(span);

            gsap.to(span, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: i * 0.05,
                ease: 'back.out'
            });
        }
    });
}

// Initialize text reveal on page load
window.addEventListener('load', animateTextReveal);