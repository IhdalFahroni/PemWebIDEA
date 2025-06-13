document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeSidebarMenuBtn = document.getElementById('closeBtn');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const mainContent = document.querySelector('main');
    
    const awalDiv = document.getElementById('awal');
    const notification = document.getElementById('notification');
    const addPlaceForm = document.getElementById('addPlace');
    const manageVerification = document.getElementById('manageVerification'); 
    const addPlaceModal = document.getElementById('addPlaceModal');
    const claimCulinaryModal = document.getElementById('claimCulinaryModal');

    const profile = document.getElementById('profil');
    
    const openHomeBtns = [document.getElementById('homeBtn'), document.getElementById('openHomeBtn')]
    const openNotificationBtns = [document.getElementById('notificationBtn'), document.getElementById('openNotificationBtn')];
    const openAddPlaceBtns = [document.getElementById('addPlaceBtn'), document.getElementById('openAddPlaceBtn')];
    const openManageVerificationBtns = [document.getElementById('manageVerificationBtn'), document.getElementById('openManageVerificationBtn')];
    const openProfilBtns = [document.getElementById('profilBtn'), document.getElementById('openProfilBtn')];

    const containerProfile = document.getElementById('containerProfile');
    const profilPage = document.getElementById('profilPage');
    const editProfilePage = document.getElementById('editProfilePage');
    const bawahProfil = document.getElementById('bawahProfil');
    const accountSetting = document.getElementById('accountSetting');

    const mainContentArea = document.getElementById('main-content-area');
    
    const savePasswordBtn = document.getElementById('savePasswordBtn');
    const currentPasswordInput = document.getElementById('currentPassword');
    const newPasswordInput = document.getElementById('newPass');
    const passwordError = document.getElementById('passwordError');
    const logoutBtn = document.getElementById('logoutBtn');
    
    const openAccountSettingBtn = document.getElementById('openAccountSettingBtn');
    const closeAccountSettingBtn = document.getElementById('closeAccountSettingBtn');
    
    const passwordInput = document.getElementById('newPass');
    const passError = document.getElementById('passwordError');

    const fileInput = document.getElementById("file-upload");
    const fileList = document.getElementById("file-list");
    const fileUploadVisual = document.getElementById("fileUploadVisual");
    const fileUploadPlaceholder = document.getElementById("fileUploadPlaceholder");
    const gmapsInput = document.getElementById("gmaps");

    const openEdit = document.getElementById('openEdit');
    const saveEdit = document.getElementById('saveEdit');
    const editAlamat = document.getElementById('editAlamat');
    const editGmaps = document.getElementById('editGmaps');
    const editTiket = document.getElementById('editTiket');
    const editDeskripsi = document.getElementById('editDeskripsi');
    const Alamat = document.getElementById('alamat');
    const Tiket = document.getElementById('tiket');
    const Gmaps = document.getElementById('gmaps');
    const Deskripsi = document.getElementById('deskripsi');

    const manageReview = document.getElementById('manageReviewBtn');
    const saveReview = document.getElementById('saveReviewBtn');
    const trash = document.getElementById('trashCan');
    const deleteReview = document.getElementById('deleteReviewModal');
    const closeDeleteReview = document.getElementById('closeDeleteReviewBtn');

    let activePanel = 'awal'; 

    function showPanel(panelName) {
        awalDiv.classList.add('hidden');
        notification.classList.add('hidden');
        addPlaceForm.classList.add('hidden');
        manageVerification.classList.add('hidden');
        profile.classList.add('hidden');

        mainContentArea.classList.remove('main-container', 'main-container-detail');
        
        switch (panelName) {
        case 'awal':
            awalDiv.classList.remove('hidden');
            mainContentArea.classList.add('main-container-detail'); //TAMBAH INI
            break;
        case 'notification':
            notification.classList.remove('hidden');
            mainContentArea.classList.add('main-container'); //INI JUGA
            break;
        case 'addPlace':
            addPlaceForm.classList.remove('hidden');
            mainContentArea.classList.add('main-container'); //INI JUGA
            break;
        case 'manageVerification':
            manageVerification.classList.remove('hidden');
            mainContentArea.classList.add('main-container'); //INI JUGA
            break;
        case 'profil':
            profile.classList.remove('hidden');
            containerProfile.classList.remove('hidden');
            profilPage.classList.remove('hidden');
            bawahProfil.classList.remove('hidden');
            editProfilePage.classList.add('hidden');
            accountSetting.classList.add('hidden');
            mainContentArea.classList.add('main-container'); //INI JUGA
            break;
        }
        activePanel = panelName;

        if (sidebarMenu.classList.contains('translate-x-0')) {
        sidebarMenu.classList.remove('translate-x-0');
        sidebarMenu.classList.add('-translate-x-full');
        mainContent.style.marginLeft = '5rem';
        }
    }

    mainContent.style.transition = 'margin-left 0.3s';
    hamburgerBtn.addEventListener('click', () => {
        sidebarMenu.classList.remove('-translate-x-full');
        mainContent.style.marginLeft = '18rem'; 
    });
    closeSidebarMenuBtn.addEventListener('click', () => {
        sidebarMenu.classList.add('-translate-x-full');
        mainContent.style.marginLeft = '5rem'; 
    });
    
    openHomeBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        showPanel('awal'); 
    }));
    
    openNotificationBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
            showPanel('notification');
    }));

    openAddPlaceBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
            showPanel('addPlace');
    }));

    openManageVerificationBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
            showPanel('manageVerification');
        document.querySelectorAll('.verification-item').forEach(item => {
            item.querySelectorAll('.approve-btn, .deny-btn').forEach(button => {
                button.classList.add('opacity-50', 'cursor-not-allowed');
                button.disabled = true;
                if (button.classList.contains('deny-btn')) {
                    button.classList.add('border', 'border-red-500', 'text-red-500');
                    button.classList.remove('bg-red-500', 'text-white'); 
                } else if (button.classList.contains('approve-btn')) {
                    button.classList.add('border', 'border-blue-500', 'text-blue-500'); 
                    button.classList.remove('bg-blue-500', 'text-white'); 
                }
            });
        });
    }));

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

    function openAddPlaceModal(data) {
        document.getElementById('add_placeName').textContent = data.placeName;
        document.getElementById('add_category').textContent = data.category;
        document.getElementById('add_district').textContent = data.district;
        document.getElementById('add_subdistrict').textContent = data.subdistrict;
        document.getElementById('add_village').textContent = data.village;
        document.getElementById('add_street').textContent = data.street;
        const gmapsLink = document.getElementById('add_gmaps');
        gmapsLink.href = data.gmaps;
        gmapsLink.textContent = data.gmaps;
        document.getElementById('add_description').textContent = data.description;

        const photoLinksContainer = document.getElementById('photo_link');
        photoLinksContainer.innerHTML = '';
        
        if (data.photo_link && data.photo_link.length > 0) {
            data.photo_link.forEach(fileName => {
                const link = document.createElement('a');
                link.href = `../Assets/${fileName}`; 
                link.textContent = fileName;
                link.target = '_blank'; 
                link.className = 'text-blue-600 hover:underline block'; 
                photoLinksContainer.appendChild(link);
            });
        } else {
            photoLinksContainer.textContent = 'No photo uploaded.';
        }

        addPlaceModal.classList.remove('hidden');
    }

    function openClaimCulinaryModal(data) {
        document.getElementById('claim_fullName').textContent = data.fullName;
        document.getElementById('claim_phone').textContent = data.phone;
        document.getElementById('claim_email').textContent = data.email;
        document.getElementById('claim_tin').textContent = data.tin; // Taxpayer Identification Number
        
        const documentLinksContainer = document.getElementById('supporting_document');
        documentLinksContainer.innerHTML = '';

        if (data.supporting_document && data.supporting_document.length > 0) {
            data.supporting_document.forEach(fileName => {
                const link = document.createElement('a');
                link.href = `../Assets/${fileName}`;
                link.textContent = fileName;
                link.target = '_blank';
                link.className = 'text-blue-600 hover:underline block';
                documentLinksContainer.appendChild(link);
            });
        } else {
            documentLinksContainer.textContent = 'No document uploaded.';
        }

        claimCulinaryModal.classList.remove('hidden');
    }

    document.querySelectorAll('.modal-close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.dataset.closeModal;
            const modalToClose = document.getElementById(modalId);
            closeModal(modalToClose);
        });
    });

    
    openProfilBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
            showPanel('profil');
    }));
    
    if (openAccountSettingBtn) {
        openAccountSettingBtn.addEventListener('click', () => {
            containerProfile.classList.add('hidden');
            bawahProfil.classList.add('hidden');
            accountSetting.classList.remove('hidden');
        });
    }

    if (closeAccountSettingBtn) {
        closeAccountSettingBtn.addEventListener('click', () => {
            accountSetting.classList.add('hidden');
            containerProfile.classList.remove('hidden');
            bawahProfil.classList.remove('hidden');
            profilPage.classList.remove('hidden');
            editProfilePage.classList.add('hidden');
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('input', () => {
            const password = passwordInput.value.trim();
            if (password.length > 0 && (password.length < 8 || password.length > 20)) {
                passError.classList.remove('hidden');
            } else {
                passError.classList.add('hidden');
            }
        });
    }

    const validateAndUpdateButton = () => {
        const currentPass = currentPasswordInput.value.trim();
        const newPass = newPasswordInput.value.trim();
        const isNewPassLengthValid = newPass.length >= 8 && newPass.length <= 20;

        if (newPass !== '' && !isNewPassLengthValid) {
            passwordError.classList.remove('hidden');
        } else {
            passwordError.classList.add('hidden');
        }

        const isFormValid = currentPass !== '' && newPass !== '' && isNewPassLengthValid;

        if (isFormValid) {
            savePasswordBtn.disabled = false;
            savePasswordBtn.classList.remove('text-[#FF9800]', 'bg-white', 'opacity-50', 'cursor-not-allowed');
            savePasswordBtn.classList.add('bg-[#FF9800]', 'text-white');
        } else {
            savePasswordBtn.disabled = true;
            savePasswordBtn.classList.remove('bg-[#FF9800]', 'text-white');
            savePasswordBtn.classList.add('text-[#FF9800]', 'bg-white', 'opacity-50', 'cursor-not-allowed');
        }
    };

    currentPasswordInput.addEventListener('input', validateAndUpdateButton);
    newPasswordInput.addEventListener('input', validateAndUpdateButton);
    
    validateAndUpdateButton();

    if (savePasswordBtn) {
        savePasswordBtn.addEventListener('click', () => {
            if (savePasswordBtn.disabled) {
                return;
            }
            
            alert('Successfully change password');
            
            currentPasswordInput.value = '';
            newPasswordInput.value = '';
            
            validateAndUpdateButton();
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            const message = "Are you sure you want to log out? You can still log in with this account in the next session.";
            
            const userConfirmed = window.confirm(message);

            if (userConfirmed) {
                console.log("Logging out...");
                // Mengarahkan pengguna ke halaman login
                // window.location.href = '/halaman-login.html'; 
                alert("You have been successfully logged out.");
            } else {
                console.log("Log out canceled.");
            }
        });
    }
    
    
    showPanel('awal');

    if (openEdit) {
        openEdit.addEventListener('click', function () {
            saveEdit.classList.remove('hidden');
            openEdit.classList.add('hidden');
            editAlamat.classList.remove('hidden');
            Alamat.classList.add('hidden');
            editGmaps.classList.remove('hidden');
            Gmaps.classList.add('hidden');
            editDeskripsi.classList.remove('hidden');
            Deskripsi.classList.add('hidden');
            editTiket.classList.remove('hidden');
            Tiket.classList.add('hidden');
        });
    }

    if(saveEdit) {
        saveEdit.addEventListener('click', function () {
            saveEdit.classList.add('hidden');
            openEdit.classList.remove('hidden');
            editAlamat.classList.add('hidden');
            Alamat.classList.remove('hidden');
            editGmaps.classList.add('hidden');
            Gmaps.classList.remove('hidden');
            editDeskripsi.classList.add('hidden');
            Deskripsi.classList.remove('hidden');
            editTiket.classList.add('hidden');
            Tiket.classList.remove('hidden');
        });
    }

    if(manageReview) {
        manageReview.addEventListener('click', function() {
            manageReview.classList.add('hidden');
            saveReview.classList.remove('hidden');
            trash.classList.remove('hidden');
        });
    }

    if(saveReview) {
        saveReview.addEventListener('click', function() {
            manageReview.classList.remove('hidden');
            saveReview.classList.add('hidden');
            trash.classList.add('hidden');
        });
    }

    if(trash) {
        trash.addEventListener('click', function() {
            deleteReview.classList.remove('hidden');
        });
    }
    if(closeDeleteReview) {
        closeDeleteReview.addEventListener('click', function() {
            deleteReview.classList.add('hidden');
        });
    }
});