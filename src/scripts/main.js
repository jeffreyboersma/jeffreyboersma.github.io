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

    // Tech Highlight Logic
    const techHighlights = card.querySelectorAll('.tech-highlight');
    const chips = card.querySelectorAll('.chip');

    techHighlights.forEach(highlight => {
      highlight.addEventListener('mouseenter', () => {
        const techName = highlight.getAttribute('data-tech');
        chips.forEach(chip => {
          // Check if chip text content includes the tech name or alt text matches
          if (chip.textContent.trim() === techName.trim() || chip.querySelector(`img[alt="${techName}"]`)) {
            chip.classList.add('active');
          }
        });
      });

      highlight.addEventListener('mouseleave', () => {
        chips.forEach(chip => chip.classList.remove('active'));
      });
    });

    chips.forEach(chip => {
      chip.addEventListener('mouseenter', () => {
        const techName = chip.textContent.trim();
        techHighlights.forEach(highlight => {
          if (highlight.getAttribute('data-tech') === techName) {
            highlight.classList.add('active');
          } else {
            highlight.classList.remove('active');
          }
        });
      });

      chip.addEventListener('mouseleave', () => {
        techHighlights.forEach(highlight => highlight.classList.remove('active'));
      });
    });
  });
});
