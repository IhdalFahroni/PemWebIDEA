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

// ===== INTERAKTIVITAS UNTUK DESTINATION CARDS =====
// Menambahkan event listener ke setiap card destinasi
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('click', function() {
        // Aksi ketika card diklik - bisa diganti dengan navigasi ke halaman detail
        alert('Navigating to destination details...');
        
        // Contoh navigasi ke halaman detail (uncomment jika diperlukan):
        // window.location.href = 'destination-detail.html?id=' + this.dataset.id;
    });
});

// ===== TAB SWITCHING FUNCTIONALITY =====
// Menambahkan event listener ke setiap tab filter
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Menghapus class 'active' dari semua tab
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        
        // Menambahkan class 'active' ke tab yang diklik
        this.classList.add('active');
        
        // Di sini bisa ditambahkan logika untuk filter konten berdasarkan tab
        // Misalnya: filterDestinations(this.textContent);
        
        console.log('Tab switched to:', this.textContent.trim());
    });
});

// ===== SEARCH FUNCTIONALITY =====
// Event listener untuk search box
document.querySelector('.search-box').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    console.log('Searching for:', searchTerm);
    
    // Fungsi pencarian sederhana - filter card berdasarkan nama destinasi
    filterDestinations(searchTerm);
});

// Fungsi untuk memfilter destinasi berdasarkan pencarian
function filterDestinations(searchTerm) {
    const cards = document.querySelectorAll('.destination-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        
        // Tampilkan atau sembunyikan card berdasarkan pencarian
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
            // Tambahkan efek fade in
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 100);
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== SIDEBAR MENU FUNCTIONALITY =====
// Variabel untuk tracking status sidebar
let sidebarOpen = false;

// Fungsi untuk toggle sidebar menu
function toggleSidebar() {
    const sidebarMenu = document.getElementById('sidebarMenu');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (sidebarOpen) {
        // Tutup sidebar
        sidebarMenu.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        sidebarOpen = false;
    } else {
        // Buka sidebar
        sidebarMenu.classList.add('active');
        sidebarOverlay.classList.add('active');
        sidebarOpen = true;
    }
}

// Event listener untuk hamburger icon
document.querySelector('.hamburger-icon').addEventListener('click', function(e) {
    e.stopPropagation();
    toggleSidebar();
});

// Event listener untuk overlay - tutup sidebar ketika diklik
document.getElementById('sidebarOverlay').addEventListener('click', function() {
    if (sidebarOpen) {
        toggleSidebar();
    }
});

// Event listener untuk menu items di sidebar
document.querySelectorAll('.sidebar-menu .menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const menuText = this.querySelector('.menu-text').textContent;
        console.log('Menu clicked:', menuText);
        
        // Aksi berdasarkan menu yang diklik
        switch(menuText) {
            case 'Add tourist destination':
                showAddDestinationForm();
                break;
            case 'Manage culinary site':
                showCulinaryManagement();
                break;
            case 'Notifications':
                showNotifications();
                break;
            case 'Settings':
                showSettings();
                break;
            case 'Username':
                showUserProfile();
                break;
        }
        
        // Tutup sidebar setelah menu diklik
        toggleSidebar();
    });
});

// Fungsi untuk menampilkan form add destination
function showAddDestinationForm() {
    alert('Add Tourist Destination Form\n\nFitur ini dapat dikembangkan untuk:\n- Form input destinasi baru\n- Upload gambar\n- Set rating dan deskripsi');
}

// Fungsi untuk manajemen kuliner
function showCulinaryManagement() {
    alert('Manage Culinary Site\n\nFitur ini dapat dikembangkan untuk:\n- Kelola tempat kuliner\n- Update menu dan harga\n- Manajemen review');
}

// Fungsi untuk menampilkan settings
function showSettings() {
    alert('Settings Panel\n\nFitur yang dapat dikembangkan:\n- Pengaturan akun\n- Notifikasi preferences\n- Theme settings\n- Language settings');
}

// Fungsi untuk user profile
function showUserProfile() {
    alert('User Profile\n\nInformasi user:\n- Username: @email.gmail.com\n- Edit profile\n- Change password\n- Logout');
}

// Tutup sidebar ketika ESC ditekan
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebarOpen) {
        toggleSidebar();
    }
});

// ===== SIDEBAR ICONS FUNCTIONALITY =====
// Event listeners untuk ikon di sidebar (selain hamburger yang sudah ada)
document.querySelectorAll('.sidebar-icon').forEach((icon, index) => {
    // Skip hamburger icon karena sudah ada handler terpisah
    if (index === 0) return;
    
    icon.addEventListener('click', function() {
        // Aksi berbeda untuk setiap ikon berdasarkan index
        switch(index) {
            case 1: // Plus/Add
                console.log('Add new destination clicked');
                showAddDestinationForm();
                break;
            case 2: // Sort
                console.log('Sort clicked');
                toggleSortOptions();
                break;
            case 3: // Notifications
                console.log('Notifications clicked');
                showNotifications();
                break;
        }
    });
});
function toggleSortOptions() {
    // Implementasi dropdown atau modal untuk opsi sorting
    const sortOptions = ['Name A-Z', 'Name Z-A', 'Rating High-Low', 'Rating Low-High'];
    const choice = prompt('Choose sort option:\n' + sortOptions.join('\n'));
    if (choice) {
        sortDestinations(choice);
    }
}

// Fungsi untuk sorting destinasi
function sortDestinations(option) {
    const grid = document.querySelector('.destinations-grid');
    const cards = Array.from(grid.querySelectorAll('.destination-card'));
    
    cards.sort((a, b) => {
        const titleA = a.querySelector('.card-title').textContent;
        const titleB = b.querySelector('.card-title').textContent;
        const ratingA = a.querySelectorAll('.stars')[0].textContent.split('★').length - 1;
        const ratingB = b.querySelectorAll('.stars')[0].textContent.split('★').length - 1;
        
        switch(option) {
            case 'Name A-Z':
                return titleA.localeCompare(titleB);
            case 'Name Z-A':
                return titleB.localeCompare(titleA);
            case 'Rating High-Low':
                return ratingB - ratingA;
            case 'Rating Low-High':
                return ratingA - ratingB;
            default:
                return 0;
        }
    });
    
    // Hapus semua card dan tambahkan kembali sesuai urutan baru
    cards.forEach(card => grid.removeChild(card));
    cards.forEach(card => grid.appendChild(card));
}

// Fungsi untuk menampilkan notifikasi (placeholder)
function showNotifications() {
    // Implementasi sistem notifikasi
    alert('Notifications panel - dapat dikembangkan lebih lanjut');
}

// ===== NAVIGATION ARROW FUNCTIONALITY =====
// Event listener untuk tombol navigation arrow
document.querySelector('.navigation-arrow').addEventListener('click', function() {
    // Implementasi navigasi ke halaman berikutnya atau scroll
    console.log('Navigation arrow clicked');
    
    // Contoh: scroll ke bawah
    window.scrollBy({
        top: 300,
        behavior: 'smooth'
    });
    
    // Atau bisa navigasi ke halaman berikutnya:
    // window.location.href = 'destinations-page-2.html';
});

// ===== FIXED ICONS FUNCTIONALITY =====
// Event listener untuk ikon settings
document.querySelector('.settings-icon').addEventListener('click', function() {
    console.log('Settings clicked');
    // Implementasi halaman atau modal settings
    alert('Settings panel - dapat dikembangkan lebih lanjut');
});

// Event listener untuk ikon user
document.querySelector('.user-icon').addEventListener('click', function() {
    console.log('User profile clicked');
    // Implementasi halaman atau dropdown user profile
    alert('User profile - dapat dikembangkan lebih lanjut');
});

// ===== ADDITIONAL FEATURES =====
// Fungsi untuk lazy loading gambar (jika diperlukan)
function lazyLoadImages() {
    const images = document.querySelectorAll('.card-image');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Fungsi untuk smooth scroll ke top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== INITIALIZATION =====
// Fungsi yang dijalankan setelah DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Travel destination page loaded');
    
    // Inisialisasi fitur-fitur tambahan jika diperlukan
    // lazyLoadImages();
    
    // Tambahkan smooth scroll behavior ke semua anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== KEYBOARD SHORTCUTS =====
// Event listener untuk keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K untuk focus ke search box
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('.search-box').focus();
    }
    
    // ESC untuk clear search
    if (e.key === 'Escape') {
        const searchBox = document.querySelector('.search-box');
        if (searchBox.value) {
            searchBox.value = '';
            filterDestinations(''); // Reset filter
        }
    }
});