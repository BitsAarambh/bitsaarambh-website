// Scroll progress
window.addEventListener('scroll', () => {
    const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.scroll-progress').style.width = `${progress}%`;
});

// Header shrink effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('header-shrink', window.scrollY > 100);
});

// Dynamic button effect
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        btn.style.setProperty('--x', `${e.clientX - rect.left}px`);
        btn.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});

document.addEventListener("DOMContentLoaded", function() { // Wait for DOM to load
    document.getElementById('contact_us_form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
    
        const username = document.getElementById('contact_us_name').value.trim();
        const email = document.getElementById('contact_us_email').value.trim();
        const phone = document.getElementById('contact_us_phone').value.trim();
        const message = document.getElementById('contact_us_message').value.trim();
    
        if (!username || !email || !message) {
          alert('Please fill in all required fields.');
          return;
        }
    
        // Optional: Email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
          alert('Please enter a valid email address.');
          return;
        }
    
        // Handle the form data (e.g., send to server or show confirmation)
        console.log({ username, email, phone, message });
        alert('Thank you for contacting us!');
        
        // Optional: Reset the form
        document.getElementById('contact_us_form').reset();
      });
});
