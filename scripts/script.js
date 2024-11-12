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