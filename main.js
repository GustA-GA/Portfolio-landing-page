document.addEventListener('DOMContentLoaded', () => {
    const contentBoxes = document.querySelectorAll('.content-box'); //Content boxes used in my projects, experience and education areas.
  
    contentBoxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        
        contentBoxes.forEach(otherBox => {
          if (otherBox !== box) {
            otherBox.style.opacity = '0.5';
          }
        });
      });
  
      box.addEventListener('mouseleave', () => {
        contentBoxes.forEach(otherBox => {
          otherBox.style.opacity = '1';
        });
      });
    });
  });