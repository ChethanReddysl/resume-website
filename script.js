// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

if (currentTheme) {
    setTheme(currentTheme);
}

function cycleTheme() {
    const themes = ['dark', 'contrast', 'neon'];
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextThemeIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    setTheme(themes[nextThemeIndex]);
}

themeToggle.addEventListener('click', cycleTheme);


// Particle.js configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted');
        console.log('Name:', this.name.value);
        console.log('Email:', this.email.value);
        console.log('Message:', this.message.value);
        // Clear the form
        this.reset();
        alert('Thank you for your message. I will get back to you soon!');
    });
}

// Animate profile picture
const profileImg = document.getElementById('profile-img');
if (profileImg) {
    profileImg.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(360deg) scale(1.1)';
        this.style.transition = 'transform 0.5s ease-in-out';
    });
    profileImg.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0deg) scale(1)';
    });
}

// Add hover effect to skill buttons
document.querySelectorAll('.skills-list li').forEach(skill => {
    skill.addEventListener('mouseover', function() {
        this.style.animation = 'none';
    });
    skill.addEventListener('mouseout', function() {
        this.style.animation = 'skillPulse 2s infinite';
    });
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic loading animations
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

