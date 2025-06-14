document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    emailInput.addEventListener('input', function() {
        const email = emailInput.value;
        if (!email.includes('@')) {
            emailError.classList.remove('hidden');
        } else {
            emailError.classList.add('hidden');
        }
    });

    function handleSendLink() {
        const email = emailInput.value;
        let isValid = true;

        if (!email.includes('@')) {
            emailError.classList.remove('hidden');
            isValid = false;
        } else {
            emailError.classList.add('hidden');
        }

        if (isValid) {
            console.log("Send Link to Email button clicked!");
            console.log("Email to send link:", email); 
        }

        return isValid;
    }
});