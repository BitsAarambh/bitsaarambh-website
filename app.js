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
    document.getElementById("contact_us_form").addEventListener("submit", function (event) {
        event.preventDefault();
        let email = document.getElementById("contact_us_email").value.trim();
        let phone = document.getElementById("contact_us_phone").value.trim();
        let errorDiv = document.getElementById("contact_us_error");

        errorDiv.innerHTML = "";
        errorDiv.style.color = "red";

        let emailRegex = /^[a-zA-Z0-9]+([._][a-zA-Z0-9]+)*@gmail\.com$/;
        let phoneRegex = /^[6-9]\d{9}$/;

        let isValid = true;
        let errorMessage = [];

        if (!emailRegex.test(email)) {
            errorMessage.push("Invalid Gmail address.");
            isValid = false;
        }

        if (!phoneRegex.test(phone)) {
            errorMessage.push("Invalid phone number.");
            isValid = false;
        }

        if (!isValid) {
            errorDiv.innerHTML = errorMessage.join("<br>"); // Display errors with line breaks
        } else {
            // Add validation for other required fields (e.g., name) here
            if (document.getElementById("contact_us_name").value.trim() === "") {
                errorDiv.innerHTML = "Username is required.";
                isValid = false;
            }
        }

        if (isValid) {
            this.submit(); // Submit only if all validations pass
        }
    });
});