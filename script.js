function changeMainImage(src) {
    document.getElementById('mainImage').src = src;
  }
  
  function scrollCarousel(direction) {
    const carousel = document.querySelector('.thumbnail-carousel');
    const scrollAmount = 100;
  
    if (direction === 'left') {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else if (direction === 'right') {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
  let currentIndex = 0;
const slides = document.querySelector('.carousel-slide');
const totalSlides = document.querySelectorAll('.result-card').length;

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; 
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; 
  }
  updateCarousel();
}

function updateCarousel() {
  const offset = -(currentIndex * 320); 
  slides.style.transform = `translateX(${offset}px)`;
}

// Auto slide every 3 seconds 
setInterval(nextSlide, 3000);

// Navigation buttons
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);
function openModal() {
  document.getElementById("offerModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("offerModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("offerModal");
  if (event.target === modal) 
  {
    closeModal();
  }
}