document.addEventListener('DOMContentLoaded', () => {
    const newPass = document.getElementById('newPassword');
    const confirmNewPass = document.getElementById('confirmPassword');
    const togglePasswordIcon = document.getElementById('togglePasswordIcon');
    const passwordError = document.getElementById('passwordError');
    const passwordDontMatchError = document.getElementById('passwordDontMatch');

    if (togglePasswordIcon) {
        togglePasswordIcon.addEventListener('click', function () {
            const type = confirmNewPass.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmNewPass.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
            this.classList.toggle('fa-eye');
        });
    }

    newPass.addEventListener('input', function() {
        const password = newPass.value;
        if (password.length < 8 || password.length > 20) {
            passwordError.classList.remove('hidden'); 
        } else {
            passwordError.classList.add('hidden'); 
        }
    });

    function handleChange() {
        const password = newPass.value;
        const newPassword = confirmNewPass.value;

        let isValid = true;

        if (password.length < 8 || password.length > 20) {
            passwordError.classList.remove('hidden');
            isValid = false;
        } else {
            passwordError.classList.add('hidden');
        }

        if (isValid) {
            console.log("Sign Up button clicked!");
            console.log("Password:", password);
        }

        return isValid; 
    }
});