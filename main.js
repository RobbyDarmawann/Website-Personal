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

window.onload = typeEffect;

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
