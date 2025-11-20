// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Initial theme is now handled by inline script in head to prevent flash

// Function to toggle theme
function toggleTheme() {
  const existingTheme = htmlElement.getAttribute('data-theme');
  const newTheme = existingTheme === 'light' ? 'dark' : 'light';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Event Listener
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}
