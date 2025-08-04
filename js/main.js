// js/main.js

// Load components
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar", "navbar.html", initNavbar);
    loadComponent("footer", "footer.html");
    typeEffect(); // Start typing effect
});

// Navbar logic
function initNavbar() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });

        // Optional: Close menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Sticky navbar on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
        }
    });
}

// Typing effect
const skillElement = document.getElementById("skill");
const texts = ["Full-Stack Developer", "Software Engineer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        skillElement.innerHTML = currentText.substring(0, charIndex) + '<span class="cursor">|</span>';
        charIndex--;
    } else {
        skillElement.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
        charIndex++;
    }

    let typingSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 800;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Theme toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.classList.add('dark');
        themeIcon?.classList.replace('fa-moon', 'fa-sun');
    }

    toggleButton?.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        if (htmlElement.classList.contains('dark')) {
            themeIcon?.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon?.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});

// functions to show coming soon message
function showComingSoon() {
                const msg = document.getElementById('coming-soon-msg');
                msg.classList.remove('opacity-0');
                msg.classList.add('opacity-100');

                setTimeout(() => {
                msg.classList.remove('opacity-100');
                msg.classList.add('opacity-0');
                }, 3000);
            }