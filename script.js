// Get the theme toggle button and body element
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-links a');
const footer = document.querySelector('footer');

// Add event listener to toggle the theme
themeToggleButton.addEventListener('click', () => {
    // Toggle the 'dark-theme' class on the body element
    body.classList.toggle('dark-theme');
    header.classList.toggle('dark-theme');
    footer.classList.toggle('dark-theme');
    
    // Toggle the color of the sun/moon icon based on the theme
    if (body.classList.contains('dark-theme')) {
        themeToggleButton.innerHTML = '🌙'; // Change to moon when dark mode is on
    } else {
        themeToggleButton.innerHTML = '🌞'; // Change to sun when light mode is on
    }
});
