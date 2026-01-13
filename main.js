document.addEventListener('DOMContentLoaded', () => {
    const contentBoxes = document.querySelectorAll('.content-box');
    const techIconSect = document.querySelector('.tech-icons');
    const techIcons = techIconSect.querySelectorAll('img');
  
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      document.body.style.setProperty('--mouse-x', `${x}px`);
      document.body.style.setProperty('--mouse-y', `${y}px`);
    });


    // Reading indicator
    document.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('.main-column section');
      const links = document.querySelectorAll('.sticky-info nav a');
    
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
    
        // Checking if the section is in the viewport
        if (rect.top <= 100 && rect.bottom >= 10) { 
          links.forEach(link => link.classList.remove('active')); 
          links[index].classList.add('active'); 
        }
      });
    });

    // Opacity control for the contentBoxes
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

    // Opacity control for the icons
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