// Function to handle the intersection
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}

// Create a new Intersection Observer for animated elements
const animatedObserver = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

// Observe the elements with the 'animated-element' class
document.querySelectorAll('.animated-element').forEach(element => {
    animatedObserver.observe(element);
});

// Function to handle the intersection for cards
function handleCardIntersection(entries, cardObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}

// Create a new Intersection Observer for cards
const cardObserver = new IntersectionObserver(handleCardIntersection, { threshold: 0.5 });

// Observe the cards
document.querySelectorAll('.card').forEach(card => {
    cardObserver.observe(card);
});

// Get the modal
const modal = document.getElementById('modal');

// Get the image and credit elements in the modal
const modalImg = document.getElementById('modal-image');
const imageCredit = document.getElementById('image-credit');

// Function to open the modal
function openModal(imageSrc, credit) {
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    imageCredit.textContent = credit;
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Close the modal when the close button is clicked
document.querySelector('.close').addEventListener('click', closeModal);

// Close the modal when the user clicks anywhere outside the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Add event listeners to each card to open the modal with the corresponding image and credit
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
        const imageSrc = card.querySelector('img').src;
        const credit = 'Image source: Your Image Source Here. All rights reserved.';
        openModal(imageSrc, credit);
    });
});

// Function to handle the intersection for the header bar
function handleHeaderIntersection(entries, headerObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.style.position = 'absolute';
            header.style.top = `${cardsPosition}px`;
        } else {
            header.style.position = 'fixed';
            header.style.top = '0';
        }
    });
}

// Create a new Intersection Observer for the header bar
const headerObserver = new IntersectionObserver(handleHeaderIntersection, { threshold: 0 });

// Observe the header bar
headerObserver.observe(document.querySelector('header'));
// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll to the top of the page when the page is loaded or refreshed
window.addEventListener('load', () => {
    scrollToTop();
});

// Scroll to the top when the logo is clicked
document.querySelector('.logo').addEventListener('click', () => {
    scrollToTop();
});
