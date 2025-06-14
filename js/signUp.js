document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('togglePasswordIcon');
    const passwordError = document.getElementById('passwordError');
    const usernameError = document.getElementById('usernameError');
    const wajibNama = document.getElementById('wajibNama');
    const wajibUsername = document.getElementById('wajibUsername');
    const wajibEmail = document.getElementById('wajibEmail');
    const wajibPass = document.getElementById('wajibPass');
    const signUpBtn = document.getElementById('signUpBtn');
    const nameInput = document.getElementById('name');
    const usernameInput = document.getElementById('username');

    // Toggle visibility password
    if (togglePasswordIcon) {
        togglePasswordIcon.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
            this.classList.toggle('fa-eye');
        });
    }

    // Fungsi untuk cek validasi form
    function checkFormValidity() {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        const isNameValid = name !== "";
        const isUsernameValid = username.length >= 8 && username.length <= 20;
        const isEmailValid = email.includes('@') && email !== "";
        const isPasswordValid = password.length >= 8 && password.length <= 20;

        if (isNameValid && isUsernameValid && isEmailValid && isPasswordValid) {
            signUpBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            signUpBtn.classList.add('cursor-pointer');
            signUpBtn.disabled = false;
        } else {
            signUpBtn.classList.add('opacity-50', 'cursor-not-allowed');
            signUpBtn.classList.remove('cursor-pointer');
            signUpBtn.disabled = true;
        }
    }

    // Hide wajibNama saat input
    if (nameInput && wajibNama) {
        nameInput.addEventListener('input', function () {
            if (nameInput.value.trim() !== "") {
                wajibNama.classList.add('hidden');
            }
            checkFormValidity();
        });
    }

    // Validasi username saat input & hide wajibUsername
    if (usernameInput && wajibUsername) {
        usernameInput.addEventListener('input', function () {
            if (usernameInput.value.trim() !== "") {
                wajibUsername.classList.add('hidden');
            }
            const username = usernameInput.value;
            if (username.length < 8 || username.length > 20) {
                usernameError.classList.remove('hidden');
            } else {
                usernameError.classList.add('hidden');
            }
            checkFormValidity();
        });
    }

    // Validasi email saat input & hide wajibEmail
    if (emailInput) {
        emailInput.addEventListener('input', function () {
            if (emailInput.value.trim() !== "") {
                wajibEmail.classList.add('hidden');
            }
            const email = emailInput.value;
            if (!email.includes('@')) {
                emailError.classList.remove('hidden');
            } else {
                emailError.classList.add('hidden');
            }
            checkFormValidity();
        });
    }

    // Validasi password saat input & hide wajibPass
    if (passwordInput) {
        passwordInput.addEventListener('input', function () {
            if (passwordInput.value !== "") {
                wajibPass.classList.add('hidden');
            }
            const password = passwordInput.value;
            if (password.length < 8 || password.length > 20) {
                passwordError.classList.remove('hidden');
            } else {
                passwordError.classList.add('hidden');
            }
            checkFormValidity();
        });
    }

    // Fungsi validasi dan submit
    function handleSignUp() {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        let isValid = true;

        // Validasi Nama
        if (name === "") {
            wajibNama.classList.remove('hidden');
            isValid = false;
        } else {
            wajibNama.classList.add('hidden');
        }

        // Validasi Username
        if (username === "") {
            wajibUsername.classList.remove('hidden');
            isValid = false;
        } else {
            wajibUsername.classList.add('hidden');
        }

        // Validasi Email
        if (email === "") {
            wajibEmail.classList.remove('hidden');
            emailError.classList.add('hidden');
            isValid = false;
        } else if (!email.includes('@')) {
            wajibEmail.classList.add('hidden');
            emailError.classList.remove('hidden');
            isValid = false;
        } else {
            wajibEmail.classList.add('hidden');
            emailError.classList.add('hidden');
        }

        // Validasi Password
        if (password === "") {
            wajibPass.classList.remove('hidden');
            passwordError.classList.add('hidden');
            isValid = false;
        } else if (password.length < 8 || password.length > 20) {
            wajibPass.classList.add('hidden');
            passwordError.classList.remove('hidden');
            isValid = false;
        } else {
            wajibPass.classList.add('hidden');
            passwordError.classList.add('hidden');
        }

        if (isValid) {
            console.log("Sign Up button clicked!");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Username:", username);
            console.log("Password:", password);
        }

        return isValid;
    }

    // Inisialisasi tombol di awal
    checkFormValidity();

    // Event listener pada tombol Sign Up
    if (signUpBtn) {
        signUpBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if(handleSignUp()) {
                alert('Successfully Sign Up');
                window.location.href = 'LoginPage.html';
            }
        });
    }
});
