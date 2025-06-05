window.addEventListener('DOMContentLoaded', (event) => {

    const slidesData = [
        { 
            image: 'url("../Assets/LandingPagePic1.jpg")', 
            text: 'Discover the beauty of Lombok<br>from stunning destinations<br>to delicious local cuisine' ,
            positionClass : 'justify-center items-center text-center'
        },
        { 
            image: 'url("../Assets/LandingPagePic2.png")', 
            text: 'Thousands of beaches to explore.',
            positionClass: 'justify-end items-center text-right'
        },
        { 
            image: 'url("../Assets/LandingPagePic3.png")', 
            text: 'Stunning natural landscapes.',
            positionClass: 'justify-start items-center text-left' 
        },
        { 
            image: 'url("../Assets/LandingPagePic4.png")', 
            text: 'Rich cultural heritage.',
            positionClass: 'justify-start items-end text-left'
        },
        { 
            image: 'url("../Assets/LandingPagePic5.png")', 
            text: 'Various local traditions.',
            positionClass: 'justify-end items-start text-right'
        },
        { 
            image: 'url("../Assets/LandingPagePic6.png")', 
            text: 'Delightful authentic cuisine.',
            positionClass: 'justify-start items-center text-left'
        }
    ];
    const allPositionClasses = [
        'justify-center', 'justify-start', 'justify-end', 'justify-between', 'justify-around',
        'items-center', 'items-start', 'items-end', 'items-stretch', 'items-baseline',
        'text-center', 'text-left', 'text-right'
    ];

    let currentIndex = 0;
    const headerElement = document.querySelector(".header");
    const heroElement = document.querySelector(".hero");
    const heroTextElement = document.getElementById("hero-text");
    const transitionDuration = 500; 
    const slideInterval = 5000; 

    if (headerElement && heroElement && heroTextElement) {

        function changeSlide() {
            heroTextElement.classList.add('opacity-0');

            setTimeout(() => {
                const currentSlide = slidesData[currentIndex];

                headerElement.style.backgroundImage = currentSlide.image;

                heroTextElement.innerHTML = currentSlide.text;

                heroElement.classList.remove(...allPositionClasses);
                heroElement.classList.add(...currentSlide.positionClass.split(' '));

                heroTextElement.classList.remove('opacity-0');

                currentIndex = (currentIndex + 1) % slidesData.length;

            }, transitionDuration);
        }
        changeSlide(); 
        setInterval(changeSlide, slideInterval); 
        
    } else {
        console.error("Elemen header, hero, atau hero-text tidak ditemukan!");
    }

    document.querySelectorAll('.rating').forEach(el => {
        const rating = parseFloat(el.getAttribute('data-rating'));
        if (isNaN(rating)) return;

        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.3 && rating % 1 < 0.8 ? 1 : 0;
        const fullStarsAdjusted = rating % 1 >= 0.8 ? fullStars + 1 : fullStars;
        const halfStarAdjusted = rating % 1 >= 0.3 && rating % 1 < 0.8 ? 1 : 0;
        const emptyStars = 5 - fullStarsAdjusted - halfStarAdjusted;
        
        let starsHTML = '';

        for (let i = 0; i < fullStarsAdjusted; i++) {
            starsHTML += '<i class="fas fa-star text-[#FED113]"></i>';
        }
        if (halfStarAdjusted) {
            starsHTML += '<i class="fas fa-star-half-alt text-[#FED113]"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star text-[#FED113}"></i>';
        }
    });

});

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