const sideMenu = document.querySelector('#sideMenu');

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}


// auto typing function
 
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('typing-text');
    const texts = ["Flutter Developer Based In Egypt", "Hard Working developer"];
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < texts[textIndex].length) {
            textElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed by changing the delay
        } else {
            setTimeout(() => {
                textElement.textContent = ''; // Clear text after finishing
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length; // Move to the next text, loop back to start
                type(); // Restart typing
            }, 2000); // Wait before starting the next text
        }
    }

    type(); // Start the typing effect
});
