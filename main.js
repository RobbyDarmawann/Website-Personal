// Scroll to Section
function scrollToSection(id) {
  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`Section with ID '${id}' not found.`);
  }
}

// Typing Effect
const nameElement = document.getElementById('dynamic-name');
const nameText = "Muhammad Robby Darmawan";
let index = 0;

function typeEffect() {
  if (index < nameText.length) {
    nameElement.textContent += nameText[index];
    index++;
    setTimeout(typeEffect, 150); // 150ms delay for each character
  }
}

// Initialize Typing Effect on Page Load
window.onload = () => {
  typeEffect();

  // Add Smooth Scroll to Navigation Links
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
      scrollToSection(targetId);
    });
  });
};
