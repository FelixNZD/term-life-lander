document.addEventListener('DOMContentLoaded', () => {
  // Date Logic for "News" feel
  const d = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateDisplay = document.getElementById('date-display');
  if (dateDisplay) {
    dateDisplay.textContent = d.toLocaleDateString('en-US', options);
  }

  // Update Copyright Year
  const yearDisplay = document.getElementById('year');
  if (yearDisplay) {
    yearDisplay.textContent = d.getFullYear();
  }

  // Add click tracking or other analytics here if needed
  const ctaBtn = document.getElementById('nextBtn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      // Optional: Add analytics event here
      console.log('CTA Clicked');
    });
  }
});
