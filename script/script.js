function toggleFullscreen() {
    var video = document.getElementById('bgVideo');

    if (!document.fullscreenElement) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { 
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { 
            video.msRequestFullscreen();
        }
    } else {
      
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { 
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { 
            document.msExitFullscreen();
        }
    }
}



var video = document.getElementById("bgVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.getElementById('bgVideo');


    toggleAudioBtn.addEventListener('click', function() {
       
        if (videoElement.muted) {
            
            videoElement.muted = false;
            toggleAudioBtn.textContent = 'Mute';
        } else {

            videoElement.muted = true;
            toggleAudioBtn.textContent = 'Unmute';
        }
    });
});

        const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.querySelector('.nav-links');
    
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-menu');
        });

        let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    currentIndex += step;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const newTransformValue = -100 * currentIndex;
    document.querySelector('.slides').style.transform = `translateX(${newTransformValue}%)`;
}


