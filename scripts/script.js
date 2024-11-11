// Dark Mode!
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') !== null) {
  // User set a theme
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.classList.remove('fa-moon-o');
    darkModeToggle.classList.add('fa-sun-o');
  } else {
    body.classList.remove('dark-mode');
    darkModeToggle.classList.remove('fa-sun-o');
    darkModeToggle.classList.add('fa-moon-o');
  }
} else {
  // No overwritten theme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
    darkModeToggle.classList.remove('fa-moon-o');
    darkModeToggle.classList.add('fa-sun-o');
  } else {
    body.classList.remove('dark-mode');
    darkModeToggle.classList.remove('fa-sun-o');
    darkModeToggle.classList.add('fa-moon-o');
  }
}


darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Toggle icon
  darkModeToggle.classList.toggle('fa-moon-o');
  darkModeToggle.classList.toggle('fa-sun-o');
  
  // Save preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Project Overlays
function openProjectOverlay(projectId) {
  document.getElementById(projectId).style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProjectOverlay(projectId) {
  document.getElementById(projectId).style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close overlay when clicking outside content
document.addEventListener('click', function(event) {
  const overlays = document.querySelectorAll('.project-overlay');
  overlays.forEach(overlay => {
      if (event.target === overlay) {
          overlay.style.display = 'none';
          document.body.style.overflow = 'auto';
      }
  });
});