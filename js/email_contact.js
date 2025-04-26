(function() {
    // Initialize EmailJS with your public key
    emailjs.init(CONFIG.EMAIL_JS_PUBLIC_KEY);

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Prepare template parameters
        const templateParams = {
            from_name: this.querySelector('#name').value,
            from_email: this.querySelector('#email').value,
            subject: this.querySelector('#subject').value,
            message: this.querySelector('#message').value
        };

        // Send email using EmailJS
        emailjs.send(CONFIG.EMAIL_JS_SERVICE_ID, CONFIG.EMAIL_JS_TEMPLATE_ID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent successfully!');
                event.target.reset(); // Clear the form
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            })
            .finally(function() {
                // Restore button state
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
    });
})();