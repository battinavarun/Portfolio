// Toggle icon for the navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when scrolling
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Scroll reveal animation
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

// Typed.js for text animation
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Java Developer', 'Computer Science Student', 'Programmer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your actual User ID
})();

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
        from_name: document.getElementById('from_name').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    console.log('Sending the following data:', formData); // Log form data for debugging

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset the form
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });
});


