'use strict';

document.addEventListener("DOMContentLoaded", function() {
  // Get references to the navigation buttons and audio elements
  const navButtons = document.querySelectorAll('.nav-button');
  const audio1 = document.getElementById('audio1');
  const audio2 = document.getElementById('audio2');

  // Add event listeners to the navigation buttons
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log('Navigation button clicked');

      // Play or pause the corresponding audio based on the button clicked
      if (button.id === 'playAudioButton1') {
        if (audio1.paused) {
          audio1.play();
          button.textContent = "Pause Audio";
        } else {
          audio1.pause();
          button.textContent = "Play Audio";
        }
      } else if (button.id === 'playAudioButton2') {
        if (audio2.paused) {
          audio2.play();
          button.textContent = "Pause Audio";
        } else {
          audio2.pause();
          button.textContent = "Play Audio";
        }
      }
    });
  });
});