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

// Card Expansion Logic
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // Handle card click
    card.addEventListener('click', (e) => {
      // If clicking a link/button inside details, don't trigger card expansion logic
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }

      // If clicking inside the details section (content below the line), do nothing (allow text selection etc)
      if (e.target.closest('.card__details')) {
        return;
      }

      // If already expanded, collapse it
      if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        return;
      }

      // Collapse all other cards
      cards.forEach(c => c.classList.remove('expanded'));

      // Expand this card
      card.classList.add('expanded');

      // Scroll to card if needed (optional, but good for UX)
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Keyboard accessibility for card
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
});
