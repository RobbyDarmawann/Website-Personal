
function scrollToSection(id) {
  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`Section with ID '${id}' not found.`);
  }
}

const nameElement = document.getElementById('dynamic-name');
const nameText = "Muhammad Robby Darmawan";
let index = 0;

function typeEffect() {
  if (index < nameText.length) {
    nameElement.textContent += nameText[index];
    index++;
    setTimeout(typeEffect, 150); 
  }
}


window.onload = () => {
  typeEffect();

  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("header");

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll);

  onScroll();
});
