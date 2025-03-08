document.addEventListener('DOMContentLoaded', function() {
  // Previous JS code remains the same...

  /* Chibi Eye Tracking */
  const chibi = document.querySelector('.chibi');
  const eyes = document.querySelectorAll('.eye');

  document.addEventListener('mousemove', (e) => {
    const chibiRect = chibi.getBoundingClientRect();
    const centerX = chibiRect.left + chibiRect.width/2;
    const centerY = chibiRect.top + chibiRect.height/2;
    
    eyes.forEach(eye => {
      const eyeRect = eye.getBoundingClientRect();
      const dx = e.clientX - (eyeRect.left + eyeRect.width/2);
      const dy = e.clientY - (eyeRect.top + eyeRect.height/2);
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(5, Math.sqrt(dx*dx + dy*dy)/30);
      
      eye.style.transform = `
        translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px)
      `;
    });
  });

  // Blink animation
  setInterval(() => {
    chibi.querySelector('.eyes').style.transform = 'scaleY(0.1)';
    setTimeout(() => {
      chibi.querySelector('.eyes').style.transform = 'scaleY(1)';
    }, 150);
  }, 5000);
});