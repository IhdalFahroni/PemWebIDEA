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

document.addEventListener("DOMContentLoaded", function () {
    function generateStars(element) {
        let rating = parseFloat(element.getAttribute("data-rating")); // Ambil rating
        let fullStars = Math.floor(rating); // Bintang penuh
        let halfStar = rating % 1 >= 0.5 ? 1 : 0; // Bintang setengah jika >= 0.5
        let emptyStars = 5 - (fullStars + halfStar); // Sisa bintang kosong

        let starsHTML = "";

        // Tambah bintang penuh
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fa-solid fa-star"></i>';
        }
        // Tambah bintang setengah jika ada
        if (halfStar) {
            starsHTML += '<i class="fa-solid fa-star-half-alt"></i>';
        }
        // Tambah bintang kosong
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="fa-regular fa-star"></i>';
        }

        element.innerHTML = starsHTML;
    }

    document.querySelectorAll(".rating").forEach(generateStars);
});