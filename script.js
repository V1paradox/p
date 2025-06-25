// Global state
let currentLanguage = 'en';
let currentTheme = 'light';

// Language data
const translations = {
    en: {
        direction: 'ltr'
    },
    ar: {
        direction: 'rtl'
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    
    // Add smooth scrolling for anchor links
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
    
    // Add navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = currentTheme === 'light' 
                ? 'rgba(255, 255, 255, 0.95)' 
                : 'rgba(45, 55, 72, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = currentTheme === 'light' 
                ? '#ffffff' 
                : '#2d3748';
            navbar.style.backdropFilter = 'none';
        }
    });
});

// Theme toggle function
function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    document.body.className = theme + '-mode';
    
    // Update theme icons
    const themeIcons = document.querySelectorAll('#theme-icon, #footer-theme-icon');
    themeIcons.forEach(icon => {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    });
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Update navbar background if scrolled
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = theme === 'light' 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(45, 55, 72, 0.95)';
    }
}

// Language toggle function
function toggleLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
}

function setLanguage(language) {
    currentLanguage = language;
    
    // Update HTML attributes
    document.documentElement.lang = language;
    document.documentElement.dir = translations[language].direction;
    
    // Update language toggle text
    const langTexts = document.querySelectorAll('#lang-text, #footer-lang-text');
    langTexts.forEach(text => {
        text.textContent = language.toUpperCase();
    });
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-en][data-ar]');
    translatableElements.forEach(element => {
        const translation = element.getAttribute(`data-${language}`);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Save to localStorage
    localStorage.setItem('language', language);
    
    // Update body class for additional styling if needed
    document.body.classList.remove('lang-en', 'lang-ar');
    document.body.classList.add(`lang-${language}`);
}

// Smooth reveal animation for elements on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.feature-card, .step, .preview-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize reveal animation
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for reveal elements
    const revealElements = document.querySelectorAll('.feature-card, .step, .preview-card');
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Add scroll listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Initial check
    revealOnScroll();
});

// CTA button click handlers
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Here you would typically redirect to a demo or signup page
            console.log('CTA clicked - would redirect to demo/signup');
            
            // For demo purposes, show an alert
            const message = currentLanguage === 'en' 
                ? 'Demo coming soon! Thank you for your interest.' 
                : 'العرض التوضيحي قريباً! شكراً لاهتمامك.';
            alert(message);
        });
    });
});

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Toggle theme with Ctrl/Cmd + Shift + T
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        toggleTheme();
    }
    
    // Toggle language with Ctrl/Cmd + Shift + L
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        toggleLanguage();
    }
});

// Intersection Observer for better performance on scroll animations
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        const elementsToObserve = document.querySelectorAll('.feature-card, .step, .preview-card');
        elementsToObserve.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    });
}

// Utility function to detect if user prefers reduced motion
function respectsReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Apply reduced motion preferences
if (respectsReducedMotion()) {
    document.addEventListener('DOMContentLoaded', function() {
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    });
}

// Error handling for missing elements
function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element not found: ${selector}`);
    }
    return element;
}

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedReveal = debounce(revealOnScroll, 10);
window.addEventListener('scroll', debouncedReveal);

// Export functions for potential external use
window.POVNApp = {
    toggleTheme,
    toggleLanguage,
    setTheme,
    setLanguage,
    getCurrentTheme: () => currentTheme,
    getCurrentLanguage: () => currentLanguage
};