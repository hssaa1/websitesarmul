// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert when 'Login' button is clicked
const loginButton = document.querySelector('.cta-button[href="login.html"]');
if (loginButton) {
    loginButton.addEventListener('click', function (e) {
        e.preventDefault();
        alert('You clicked on the Login button!');
        // You can redirect to the login page if needed
        // window.location.href = "login.html";
    });
}

// Alert when 'Contact Us' button is clicked
const contactButton = document.querySelector('.cta-button[href="contact.html"]');
if (contactButton) {
    contactButton.addEventListener('click', function (e) {
        e.preventDefault();
        alert('You clicked on the Contact Us button!');
        // You can redirect to the contact page if needed
        // window.location.href = "contact.html";
    });
}
