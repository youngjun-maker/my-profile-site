// ============================================
// Intersection Observer for Scroll Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in, .fade-in-up');
    fadeInElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // First fade-in element (hero) should be visible immediately
    const heroFadeIn = document.querySelector('#hero .fade-in-up');
    if (heroFadeIn) {
        heroFadeIn.style.opacity = '1';
        heroFadeIn.style.transform = 'translateY(0)';
    }
});

// ============================================
// Smooth Scroll Navigation
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Update active navigation link
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// ============================================
// Section Observer for Animations
// ============================================

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fadeElements = entry.target.querySelectorAll('.fade-in, .fade-in-up');
            fadeElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 50);
            });
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// ============================================
// Skill Cards Animation
// ============================================

const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.3s ease-out';

    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 100);
});

// ============================================
// Project Cards Animation
// ============================================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.3s ease-out';

    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 100);
});

// ============================================
// Active Navigation Link on Scroll
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Parallax Effect (Optional)
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#hero');
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// ============================================
// Email Link Handler
// ============================================

document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Allow default email behavior
        return true;
    });
});

// ============================================
// External Link Handler
// ============================================

document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add visual feedback
        this.style.opacity = '0.7';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 200);
    });
});

// ============================================
// Print Scroll Progress
// ============================================

window.addEventListener('load', () => {
    console.log('🎨 Profile Website Loaded Successfully!');
    console.log('Portfolio: Hong Gildon');
    console.log('Frontend Developer');
});

// ============================================
// Prevent Flash of Unstyled Content
// ============================================

document.documentElement.style.visibility = 'visible';
