document.addEventListener('DOMContentLoaded', () => {
    const contentBoxes = document.querySelectorAll('.content-box');
    const techIconSect = document.querySelector('.tech-icons');
    const techIcons = techIconSect.querySelectorAll('img');
  
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

    techIcons.forEach(box => {
      box.addEventListener('mouseenter', () => {

        techIcons.forEach(otherBox => {
          if (otherBox !== box){
            otherBox.style.opacity = '0.5';
          }
        });
      });

      box.addEventListener('mouseleave', () => {

        techIcons.forEach(otherBox => {
          if (otherBox !== box){
            otherBox.style.opacity = '1';
          }
        });
      });

    });


  });