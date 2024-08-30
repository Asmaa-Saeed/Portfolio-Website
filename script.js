const sideMenu = document.querySelector("#sideMenu");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

// auto typing function

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-text");
  const texts = [" ","Flutter Developer Based In Egypt"];
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[textIndex].length) {
      textElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Adjust typing speed by changing the delay
    } else {
      setTimeout(() => {
        textElement.textContent = ""; // Clear text after finishing
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length; // Move to the next text, loop back to start
        type(); // Restart typing
      }, 2000); // Wait before starting the next text
    }
  }

  type(); // Start the typing effect
});



// add the skills smooth fill

document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".the-progress span");

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute("data-width");
          bar.style.width = width;
          observer.unobserve(bar); // Stop observing after the animation
        }
      });
    },
    { threshold: 0.5 }
  );

  progressBars.forEach(function (bar) {
    observer.observe(bar);
  });
});


// scroll navbar
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");



window.addEventListener("scroll", () => {
  if(scrollY > 50) {
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    navLinks.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm' );
  }else {
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    navLinks.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm' );
  }
});
