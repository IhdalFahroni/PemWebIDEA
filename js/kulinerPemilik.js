document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeSidebarMenuBtn = document.getElementById('closeBtn');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const mainContent = document.querySelector('main');
    
    const awalDiv = document.getElementById('awal');
    const notification = document.getElementById('notification');
    const addPlaceForm = document.getElementById('addPlace');
    const profile = document.getElementById('profil');
    const listManage = document.getElementById('listPlace');
    
    const openNotificationBtns = [document.getElementById('notificationBtn'), document.getElementById('openNotificationBtn')].filter(Boolean);
    const openAddPlaceBtns = [document.getElementById('addPlaceBtn'), document.getElementById('openAddPlaceBtn')].filter(Boolean);
    const openProfilBtns = [document.getElementById('profilBtn'), document.getElementById('openProfilBtn')].filter(Boolean);
    const openManage = [document.getElementById('manageBtn'), document.getElementById('openManageBtn')];
    
    //untuk menu dan promo sebelum edit
    const openMenus = document.getElementById('openMenu');
    const openPromos = document.getElementById('openPromo');
    const closeMenus = document.getElementById('closeMenu');
    const closePromos = document.getElementById('closePromo');
    const menu = document.getElementById('menuModal');
    const promo = document.getElementById('promoModal');

    // Variabel untuk form edit profil
    const editProfileBtn = document.getElementById('editProfileBtn');
    const saveEditBtn = document.getElementById('saveEditBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const editUsernameInput = document.getElementById('editUsername');
    const editFullNameInput = document.getElementById('editFullName');
    const usernameError = document.getElementById('usernameError');

    //INI BUAT UBAH CONTAINER
    const mainContentArea = document.getElementById('main-content-area');
    
    const openAccountSettingBtn = document.getElementById('openAccountSettingBtn');
    const closeAccountSettingBtn = document.getElementById('closeAccountSettingBtn');
    const deleteAccountBtn = document.getElementById('deleteAccountBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    //INI BUAT UBAH PASSOWRD
    const savePasswordBtn = document.getElementById('savePasswordBtn');
    const currentPasswordInput = document.getElementById('currentPassword');
    const newPasswordInput = document.getElementById('newPass');
    const passwordError = document.getElementById('passwordError');

    const passwordInput = document.getElementById('newPass');
    const passError = document.getElementById('passwordError');

    // UNTUK FILE EXPLORER DAN GMAP
    const attractionForm = document.getElementById("attractionForm");
    const fileInput = document.getElementById("file-upload");
    const fileList = document.getElementById("file-list");
    const fileUploadVisual = document.getElementById("fileUploadVisual");
    const fileUploadPlaceholder = document.getElementById("fileUploadPlaceholder");
    const gmapsInput = document.getElementById("gmaps");

    const openEdit = document.getElementById('openEdit');
    const saveEdit = document.getElementById('saveEdit');
    const editMenu = document.getElementById('editMenu');
    const editPromo = document.getElementById('editPromo');
    const editAlamat = document.getElementById('editAlamat');
    const editGmaps = document.getElementById('editGmaps');
    const editDeskripsi = document.getElementById('editDeskripsi');
    const Alamat = document.getElementById('alamat');
    const GoogleMaps = document.getElementById('googleMaps');
    const Deskripsi = document.getElementById('deskripsi');

    const editMenuModal = document.getElementById('editMenuModal');
    const editPromoModal = document.getElementById('editPromoModal');
    const closeEditMenu = document.getElementById('closeEditMenu');
    const closeEditPromo = document.getElementById('closeEditPromo');

    const review = document.getElementById('review');

    const addReview = document.getElementById('addReview');
    const closeReview = document.getElementById('closeReview');
    const fillReview = document.getElementById('fillReview');
    
    const openRating = document.getElementById('openRating');
    const ratingModal = document.getElementById('ratingModal');
    const closeRating = document.getElementById('closeRating');
    
    const openImage = document.getElementById('openImage');
    const imageModal = document.getElementById('imageModal');
    const closeImage = document.getElementById('closeImage');
    
    const cancelRating = document.getElementById('cancelRating');
    const afterRating = document.getElementById('afterRating');
    
    const cancelImage = document.getElementById('cancelImage');
    const afterImage = document.getElementById('afterImage');
    
    const openAfterImage = document.getElementById('openAfterImage');
    const openAfterRating = document.getElementById('openAfterRating');

    let activePanel = 'awal'; 

    function showPanel(panelName) {
        awalDiv.classList.add('hidden');
        notification.classList.add('hidden');
        addPlaceForm.classList.add('hidden');
        profile.classList.add('hidden');
        listManage.classList.add('hidden');

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
        case 'listPlace':
            sidebarMenu.classList.remove('-translate-x-full');
            listManage.classList.remove('hidden');
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
    if (openManage[0]) { 
        openManage[0].addEventListener('click', (e) => {
        e.preventDefault();
        sidebarMenu.classList.remove('-translate-x-full');
        mainContent.style.marginLeft = '18rem';
        listManage.classList.remove('hidden');
        });
    }
    if (openManage[1]) { 
        openManage[1].addEventListener('click', (e) => {
        e.preventDefault();
        listManage.classList.toggle('hidden');
        });
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
    
    openNotificationBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (activePanel === 'notification') {
            showPanel('awal');
        } else {
            showPanel('notification');
        }
    }));

    openAddPlaceBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (activePanel === 'addPlace') {
            showPanel('awal');
        } else {
            showPanel('addPlace');
        }
    }));
    
    openProfilBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (activePanel === 'profil') {
            showPanel('awal');
        } else {
            showPanel('profil');
        }
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

    //Tambahin ini juga
    function validateProfileForm() {
        if (!editUsernameInput || !editFullNameInput || !saveEditBtn) return; // Pengaman jika elemen tidak ada

        const username = editUsernameInput.value.trim();
        const fullName = editFullNameInput.value.trim();
        const isUsernameLengthValid = username.length >= 8 && username.length <= 20;
        
        if (username.length > 0 && !isUsernameLengthValid) {
            usernameError.classList.remove('hidden');
        } else {
            usernameError.classList.add('hidden');
        }
        const isFormValid = isUsernameLengthValid && fullName.length > 0;
        if (isFormValid) {
            saveEditBtn.disabled = false;
            saveEditBtn.classList.remove('text-[#FF9800]', 'bg-white', 'opacity-50', 'cursor-not-allowed');
            saveEditBtn.classList.add('bg-[#FF9800]', 'text-white');
        } else {
            saveEditBtn.disabled = true;
            saveEditBtn.classList.remove('bg-[#FF9800]', 'text-white');
            saveEditBtn.classList.add('text-[#FF9800]', 'bg-white', 'opacity-50', 'cursor-not-allowed');
        }
    }

    // 2. EVENT LISTENER PADA TOMBOL EDIT, SAVE, DAN CANCEL
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            profilPage.classList.add('hidden');
            editProfilePage.classList.remove('hidden');
            
            // !! INI BAGIAN PENTING YANG HILANG !!
            // Panggil validasi untuk mengatur kondisi awal tombol "Save"
            validateProfileForm(); 
        });
    }

    if (saveEditBtn) {
        saveEditBtn.addEventListener('click', () => {
            // Logika penyimpanan data bisa ditambahkan di sini
            // Contoh: alert('Perubahan disimpan!');
            profilPage.classList.remove('hidden');
            editProfilePage.classList.add('hidden');
        });
    }

    if (cancelEditBtn) {
        cancelEditBtn.addEventListener('click', () => {
            profilPage.classList.remove('hidden');
            editProfilePage.classList.add('hidden');
        });
    }
    
    // 3. PASANG EVENT LISTENER 'INPUT' UNTUK VALIDASI REAL-TIME
    if (editUsernameInput && editFullNameInput) {
        editUsernameInput.addEventListener('input', validateProfileForm);
        editFullNameInput.addEventListener('input', validateProfileForm);
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

    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', () => {
            const message = "This action will permanently delete your account. Are you sure you want to continue?";                   
            const userConfirmed = window.confirm(message);
            if (userConfirmed) {
                console.log("Pengguna mengonfirmasi penghapusan akun.");
                alert("Your account has been successfully deleted.");
                // Arahkan pengguna ke halaman login atau halaman utama
                // window.location.href = '/login.html'; 
            } else {
                console.log("Account deletion canceled.");
            }
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
    // UNTUK OPEN GMAP
    if (gmapsInput) {
            let mapsAlertShown = false; 
            gmapsInput.addEventListener('focus', () => {
                if (!mapsAlertShown) {
                    window.open('https://www.google.com/maps', '_blank');
            
                    alert("Please search for and mark the location on Google Maps that just opened.\n\n" +
                        "Once you have found the location, click the 'Share' button,\n" +
                        "then copy the link provided and paste it into this field.");
                    mapsAlertShown = true; 
                }
            });
        }

        // INI UNTUK CEK INPUTAN FORM
    if (attractionForm) {
        attractionForm.onsubmit = (e) => {
            e.preventDefault(); 
            let isValid = true; 

            const showError = (inputElement, message) => {
                inputElement.classList.add('border-red-500'); 
                let errorSpan = inputElement.nextElementSibling;
                if (!errorSpan || !errorSpan.classList.contains('error-message')) {
                    errorSpan = document.createElement('p');
                    errorSpan.classList.add('error-message', 'text-red-500', 'text-sm', 'mt-1');
                    inputElement.parentNode.insertBefore(errorSpan, inputElement.nextSibling); 
                }
                errorSpan.textContent = message;
                isValid = false; 
            };
            
            const hideError = (inputElement) => {
                inputElement.classList.remove('border-red-500'); 
                let errorSpan = inputElement.nextElementSibling;
                if (errorSpan && errorSpan.classList.contains('error-message')) {
                    errorSpan.textContent = ''; 
                        
                }
            };

            attractionForm.querySelectorAll('input[type="text"]:not(#fileUploadPlaceholder), textarea').forEach(input => {
                if (!input.value.trim()) {
                    showError(input, "This field is required.");
                } else {
                    hideError(input);
                }
            });

            const urlRegex = /^(https?:\/\/(?:www\.|m\.)?google\.(?:com|co\.\w{2}|ru)\/maps\S*|https?:\/\/maps\.app\.goo\.gl\/\S*)/i;

            if (!gmapsInput.value.trim()) {
                showError(gmapsInput, "This field is required.");
            } else if (!urlRegex.test(gmapsInput.value.trim())) {
                showError(gmapsInput, "Please enter a valid map URL (e.g., Google Maps link).");
            } else {
                hideError(gmapsInput);
            }
                    
            if (isValid) {
                alert("Form has been submitted!"); 
                e.target.reset();  
                fileList.textContent = ''; 
                fileUploadPlaceholder.value = ''; 
                fileUploadPlaceholder.placeholder = "Upload File(s)"; 
                attractionForm.querySelectorAll('.border-red-500').forEach(el => el.classList.remove('border-red-500'));
                attractionForm.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            }
        };
    } else { 
        console.error("Error: Form dengan ID 'attractionForm' tidak ditemukan!");
    }

    // INI UNTUK UPLOAD FILE
    if (fileUploadVisual) { 
        fileUploadVisual.onclick = () => {
            fileInput.click();
        };
    } else {
        console.error("Error: Div 'fileUploadVisual' tidak ditemukan!");
    }

    // INI UNTUK MENAMPILKAN NAMA FILE SETELAH DIPILIH
    if (fileInput) { 
        fileInput.onchange = () => {
            if (fileInput.files.length > 0) {
                let filesText = Array.from(fileInput.files)
                                        .map(file => file.name)
                                        .join(', ');
                fileList.textContent = `Selected: ${filesText}`;
                fileUploadPlaceholder.value = `${fileInput.files.length} file(s) selected`; 
            } else {
                fileList.textContent = '';
                fileUploadPlaceholder.value = ''; 
                fileUploadPlaceholder.placeholder = "Upload File(s)"; 
            }
        };
    } else {
        console.error("Error: Input 'file-upload' tidak ditemukan!");
    }
    
    showPanel('awal');

    if(openMenus) {
        openMenus.addEventListener('click', function(){
            menu.classList.remove('hidden');
        });
    }
    if(openPromos) {
        openPromos.addEventListener('click', function(){
            promo.classList.remove('hidden');
        });
    }
    if(closeMenus) {
        closeMenus.addEventListener('click', function(){
            menu.classList.add('hidden');
        });
    }
    if(closePromos) {
        closePromos.addEventListener('click', function(){
            promo.classList.add('hidden');
        });
    }
    
    if (openEdit) {
        openEdit.addEventListener('click', function () {
        saveEdit.classList.remove('hidden');
        openEdit.classList.add('hidden');
        editMenu.classList.remove('hidden');
        openMenus.classList.add('hidden');
        editPromo.classList.remove('hidden');
        openPromos.classList.add('hidden');
        editAlamat.classList.remove('hidden');
        Alamat.classList.add('hidden');
        editGmaps.classList.remove('hidden');
        GoogleMaps.classList.add('hidden');
        editDeskripsi.classList.remove('hidden');
        Deskripsi.classList.add('hidden');
        review.classList.add('hidden');
        });
    }

    if(saveEdit) {
        saveEdit.addEventListener('click', function () {
        saveEdit.classList.add('hidden');
        openEdit.classList.remove('hidden');
        editMenu.classList.add('hidden');
        openMenus.classList.remove('hidden');
        editPromo.classList.add('hidden');
        openPromos.classList.remove('hidden');
        editAlamat.classList.add('hidden');
        Alamat.classList.remove('hidden');
        editGmaps.classList.add('hidden');
        GoogleMaps.classList.remove('hidden');
        editDeskripsi.classList.add('hidden');
        Deskripsi.classList.remove('hidden');
        review.classList.remove('hidden');
        });
    }

    if(editMenu) {
        editMenu.addEventListener('click', function() {
            editMenuModal.classList.remove('hidden');
        });
    }
    if(closeEditMenu) {
        closeEditMenu.addEventListener('click', function() {
            editMenuModal.classList.add('hidden');
        });
    }
    if(editPromo) {
        editPromo.addEventListener('click', function() {
            editPromoModal.classList.remove('hidden');
        });
    }
    if(closeEditPromo) {
        closeEditPromo.addEventListener('click', function() {
            editPromoModal.classList.add('hidden');
        });
    }
    
    if(addReview) {
        addReview.addEventListener('click', function() {
            addReview.classList.add('hidden');
            fillReview.classList.remove('hidden');
        });
    }
    
    if(closeReview) {
        closeReview.addEventListener('click', function() {
            addReview.classList.remove('hidden');
            fillReview.classList.add('hidden');
        });
    }
    
    if(openRating) {
        openRating.addEventListener('click', function() {
            ratingModal.classList.remove('hidden');
        });
    }
    if(closeRating) {
        closeRating.addEventListener('click', function() {
            ratingModal.classList.add('hidden');
        });
    }
    
    if(openImage) {
        openImage.addEventListener('click', function() {
            imageModal.classList.remove('hidden');
        });
    }
    if(closeImage) {
        closeImage.addEventListener('click', function() {
            imageModal.classList.add('hidden');
        });
    }

    if(cancelRating) {
        cancelRating.addEventListener('click', function() {
            afterRating.classList.add('hidden');
            ratingModal.classList.remove('hidden');
        });
    }
    if(cancelImage) {
        cancelImage.addEventListener('click', function() {
            afterImage.classList.add('hidden');
            imageModal.classList.remove('hidden');
        });
    }
    
    if(openAfterRating) {
        openAfterRating.addEventListener('click', function() {
            ratingModal.classList.add('hidden');
            fillReview.classList.remove('hidden');
            afterRating.classList.remove('hidden');
        });
    }
    if(openAfterImage) {
        openAfterImage.addEventListener('click', function() {
            imageModal.classList.add('hidden');
            fillReview.classList.remove('hidden');
            afterImage.classList.remove('hidden');
        });
    }
});