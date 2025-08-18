// script.js
// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Dark/Light Mode Toggle
const modeSwitch = document.getElementById('mode-switch');
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark');
    modeSwitch.checked = true;
}

modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        body.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    }
});


// Active Nav Link Highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
