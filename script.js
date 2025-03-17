function handleAuth() {
    let path = window.location.pathname.toLowerCase();
    let isSignUp = path.includes("signup");

    let username = document.querySelector("input[placeholder='Username']");
    let password = document.querySelector("input[placeholder='Password']");
    let email = document.querySelector("input[placeholder='Email']");

    let usernameValue = username ? username.value.trim() : "";
    let passwordValue = password ? password.value.trim() : "";
    let emailValue = email ? email.value.trim() : "";

    if (passwordValue === "" || usernameValue === "" || (isSignUp && emailValue === "")) {
        alert("Semua kolom harus diisi!");
        return false;
    }

    if (isSignUp && !emailValue.includes("@")) {
        alert("Masukkan email yang valid!");
        return false;
    }

    if (isSignUp) {
        alert("Akun berhasil dibuat! Silakan login.");
        window.location.href = "LoginPage.html";
    } else {
        alert("Login berhasil!");
        window.location.href = "LandingPage.html";
    }

    return false;
}
