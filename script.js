document.addEventListener('DOMContentLoaded', () => {
  // Intro Overlay Animation Logic
  setTimeout(() => {
    const introOverlay = document.getElementById('introOverlay');
    if (introOverlay) {
      introOverlay.classList.add('hide');
      
      // Cleanup DOM after transition
      setTimeout(() => {
        introOverlay.style.display = 'none';
      }, 800);
    }
  }, 2500); // 2.5 seconds intro duration

  // Services Accordion Logic
  const serviceItems = document.querySelectorAll('.service-item');
  
  serviceItems.forEach(item => {
    const header = item.querySelector('.service-header');
    
    header.addEventListener('click', () => {
      // If already expanded, do nothing or collapse it
      const isExpanded = item.classList.contains('expanded');
      
      // Close all others
      serviceItems.forEach(el => {
        el.classList.remove('expanded');
        // Reset icon to plus
        const icon = el.querySelector('.toggle-btn');
        icon.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
      });

      if (!isExpanded) {
        item.classList.add('expanded');
        // Set icon to close
        const icon = item.querySelector('.toggle-btn');
        icon.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      }
    });
  });
  
  // Update icons initially for the already expanded ones (if any)
  serviceItems.forEach(el => {
    if(!el.classList.contains('expanded')){
        const icon = el.querySelector('.toggle-btn');
        icon.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
    }
  });
});
