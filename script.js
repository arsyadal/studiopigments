// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for fade-up animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
});

// Trigger animations on load for items already in view
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.hero .fade-up').forEach(element => {
            element.classList.add('visible');
        });
    }, 100);
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
mobileToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10, 10, 10, 0.95)';
        navLinks.style.padding = '2rem 0';
        navLinks.style.textAlign = 'center';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        document.querySelector('.navbar .btn').style.display = 'inline-block';
        document.querySelector('.navbar .btn').style.marginTop = '1rem';
    }
});

// WhatsApp Booking System Dynamic Message
const bookingForm = document.getElementById('wa-booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form Data collection
        const name = document.getElementById('name').value;
        const treatment = document.getElementById('treatment').value;
        const dateInput = document.getElementById('date').value;
        
        // Format the date (Optional: Could convert to locale date string)
        const dateObj = new Date(dateInput);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('id-ID', options);
        
        // Build WhatsApp Message
        const phoneNumber = "622145869696"; // Studio Pigments Number
        const message = `Halo Studio Pigments, saya ingin booking treatment *${treatment}* untuk tanggal *${formattedDate}*. \n\nNama: ${name}`;
        
        // Construct URL
        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Redirect to WhatsApp
        window.open(waUrl, '_blank');
    });
}
