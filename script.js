// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const currentTheme = document.getElementById('currentTheme');
const animatedBox = document.getElementById('animatedBox');
const animateButton = document.getElementById('animateButton');
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Theme Management
/**
 * Initializes the theme from localStorage or defaults to light theme
 */
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    currentTheme.textContent = savedTheme.charAt(0).toUpperCase() + savedTheme.slice(1);
}

/**
 * Toggles between light and dark themes
 */
function toggleTheme() {
    const currentThemeValue = document.documentElement.getAttribute('data-theme');
    const newTheme = currentThemeValue === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    currentTheme.textContent = newTheme.charAt(0).toUpperCase() + newTheme.slice(1);
}

// Animation Management
/**
 * Toggles between bounce and pulse animations
 */
function toggleAnimation() {
    if (animatedBox.classList.contains('bounce-animation')) {
        animatedBox.classList.remove('bounce-animation');
        animatedBox.classList.add('pulse-animation');
    } else {
        animatedBox.classList.remove('pulse-animation');
        animatedBox.classList.add('bounce-animation');
    }
}

// Counter Management with localStorage
/**
 * Initializes the counter from localStorage or defaults to 0
 */
function initializeCounter() {
    const savedCount = localStorage.getItem('counter') || '0';
    counterDisplay.textContent = savedCount;
}

/**
 * Updates the counter value and saves to localStorage
 * @param {number} newValue - The new counter value
 */
function updateCounter(newValue) {
    counterDisplay.textContent = newValue;
    localStorage.setItem('counter', newValue);
}

/**
 * Increments the counter
 */
function incrementCounter() {
    const currentCount = parseInt(counterDisplay.textContent);
    updateCounter(currentCount + 1);
}

/**
 * Decrements the counter
 */
function decrementCounter() {
    const currentCount = parseInt(counterDisplay.textContent);
    updateCounter(currentCount - 1);
}

/**
 * Resets the counter to 0
 */
function resetCounter() {
    updateCounter(0);
}

// Event Listeners
themeToggle.addEventListener('click', toggleTheme);
animateButton.addEventListener('click', toggleAnimation);
incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener('click', resetCounter);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeCounter();
}); 