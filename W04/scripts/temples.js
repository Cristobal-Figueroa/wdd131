// Get current year for footer copyright
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Get last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu functionality
const hamburgerButton = document.getElementById('hamburger-button');
const closeButton = document.getElementById('close-button');
const primaryNav = document.getElementById('primary-nav');

// Function to toggle the menu
function toggleMenu() {
    if (primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        closeButton.style.display = 'none';
        hamburgerButton.style.display = 'block';
    } else {
        primaryNav.classList.add('open');
        closeButton.style.display = 'block';
        hamburgerButton.style.display = 'none';
    }
}

// Event listeners for menu buttons
hamburgerButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only toggle menu on small screens
        if (window.innerWidth < 768) {
            toggleMenu();
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    // If window is resized to larger than 768px, ensure nav is visible
    if (window.innerWidth >= 768) {
        primaryNav.classList.remove('open');
        closeButton.style.display = 'none';
        hamburgerButton.style.display = 'none';
    } else {
        // On smaller screens, show hamburger button and hide nav
        if (!primaryNav.classList.contains('open')) {
            hamburgerButton.style.display = 'block';
        }
    }
});
