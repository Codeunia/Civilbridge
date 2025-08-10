const carousel = document.querySelector('.problems-carousel');
let scrollAmount = 0;

const card = carousel.querySelector('.problem-card');
const cardWidth = card.offsetWidth + 20; // card width + gap
const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

// Auto slide every 3 seconds
setInterval(() => {
  scrollAmount += cardWidth;
  if(scrollAmount > maxScrollLeft) scrollAmount = 0;

  carousel.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}, 3000);

// Optional: Add basic touch swipe support
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (startX - x); //scroll-fast
  carousel.scrollLeft = scrollLeft + walk;
});
document.getElementById('reportForm').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent actual form submission
  
  // Show a custom alert popup
  alert("Thank you for submitting your report! We will get back to you soon.");

  // Redirect to login page (change URL if needed)
  window.location.href = "index.html";
});
