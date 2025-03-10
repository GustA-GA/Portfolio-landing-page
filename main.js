document.addEventListener('DOMContentLoaded', () => {
    const contentBoxes = document.querySelectorAll('.content-box');
    const techIconSect = document.querySelector('.tech-icons');
    const techIcons = techIconSect.querySelectorAll('img');
  
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX; // Get cursor's X position
      const y = e.clientY; // Get cursor's Y position
  
      // Update the background with a radial gradient centered at the cursor's position
      document.body.style.background = `
          radial-gradient(
              circle 150px at ${x}px ${y}px,#0F0F7C,#0D0C52
          )
      `;
    });


    // Reading indicator
    document.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('.main-column section');
      const links = document.querySelectorAll('.sticky-info nav a');
    
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
    
        // Check if the section is in the viewport
        if (rect.top <= 100 && rect.bottom >= 10) { // Adjust 100px offset if needed
          links.forEach(link => link.classList.remove('active')); // Remove active class from all links
          links[index].classList.add('active'); // Add active class to the corresponding link
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