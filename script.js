// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    const body = document.body;

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navContainer.classList.toggle('nav-active');
            
            // Toggle Icon (Bars to Times)
            const icon = hamburger.querySelector('i');
            if (navContainer.classList.contains('nav-active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                body.style.overflow = 'auto';
            }
        });
    }

    // 3. Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('nav-active');
            const icon = hamburger.querySelector('i');
            if(icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            body.style.overflow = 'auto';
        });
    });

    // 4. Scroll Reveal Animations
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Trigger threshold

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    // Run once on load
    revealOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', revealOnScroll);

    // 5. Active Nav Link Highlighting on Scroll
    const sections = document.querySelectorAll('section, header');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
