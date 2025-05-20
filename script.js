function handleAuth() {
    let path = window.location.pathname.toLowerCase();
    let isSignUp = path.includes("signup");

    let username = document.querySelector("input[placeholder='Username']");
    let password = document.querySelector("input[placeholder='Password']");
    let email = document.querySelector("input[placeholder='Email']");

    let usernameValue = username ? username.value.trim() : "";
    let passwordValue = password ? password.value.trim() : "";
    let emailValue = email ? email.value.trim() : "";

    // Fungsi untuk menampilkan notifikasi custom
    function showNotification(message, type) {
        // Hapus notifikasi yang sudah ada (jika ada)
        const existingNotif = document.getElementById("custom-notification");
        if (existingNotif) {
            existingNotif.remove();
        }
        
        // Buat elemen notifikasi baru
        const notification = document.createElement("div");
        notification.id = "custom-notification";
        notification.style.position = "fixed";
        notification.style.top = "20px";
        notification.style.left = "50%";
        notification.style.transform = "translateX(-50%)";
        notification.style.padding = "15px 25px";
        notification.style.borderRadius = "8px";
        notification.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
        notification.style.zIndex = "9999";
        notification.style.fontFamily = "Arial, sans-serif";
        notification.style.fontSize = "16px";
        notification.style.display = "flex";
        notification.style.alignItems = "center";
        notification.style.gap = "10px";
        notification.style.transition = "all 0.3s ease";
        notification.style.opacity = "0";
        
        // Set warna berdasarkan tipe notifikasi
        if (type === "error") {
            notification.style.backgroundColor = "#ffebee";
            notification.style.color = "#d32f2f";
            notification.style.border = "1px solid #ffcdd2";
            notification.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> ' + message;
        } else if (type === "success") {
            notification.style.backgroundColor = "#e8f5e9";
            notification.style.color = "#2e7d32";
            notification.style.border = "1px solid #c8e6c9";
            notification.innerHTML = '<i class="fa-solid fa-circle-check"></i> ' + message;
        }
        
        // Tambahkan tombol close
        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "×";
        closeBtn.style.marginLeft = "10px";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.fontSize = "22px";
        closeBtn.style.fontWeight = "bold";
        closeBtn.onclick = function() {
            document.body.removeChild(notification);
        };
        notification.appendChild(closeBtn);
        
        // Tambahkan ke body
        document.body.appendChild(notification);
        
        // Animasi fade in
        setTimeout(() => {
            notification.style.opacity = "1";
        }, 10);
        
        // Auto close setelah 5 detik
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.opacity = "0";
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }

    if (passwordValue === "" || usernameValue === "" || (isSignUp && emailValue === "")) {
        showNotification("Semua kolom harus diisi!", "error");
        return false;
    }

    if (isSignUp && !emailValue.includes("@")) {
        showNotification("Masukkan email yang valid!", "error");
        return false;
    }

    if (isSignUp) {
        showNotification("Akun berhasil dibuat! Silakan login.", "success");
        setTimeout(() => {
            window.location.href = "LoginPage.html";
        }, 2000); // Redirect setelah 2 detik
    } else {
        showNotification("Login berhasil!", "success");
        setTimeout(() => {
            window.location.href = "Dashboard.html";
        }, 2000); // Redirect setelah 2 detik
    }

    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    // Add custom notification CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInDown {
            from {
                transform: translate(-50%, -20px);
                opacity: 0;
            }
            to {
                transform: translate(-50%, 0);
                opacity: 1;
            }
        }
        #custom-notification {
            animation: slideInDown 0.3s forwards;
        }
    `;
    document.head.appendChild(style);
    
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