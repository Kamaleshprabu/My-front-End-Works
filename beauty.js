const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPreView: 1
        },
        620: {
            slidesPreView: 2
        },
        1024: {
            slidesPreView: 3
        }
    }
});

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper-two .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper-two .slide-button");
    const sliderScrollbar = document.querySelector(".container-two .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) =>{
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            scrollbarThumb.style.left =`${newThumbPosition}px`;
        }

    });

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });

    const handleSlideButtons= () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    } 

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    })
}

window.addEventListener("load", initSlider)


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } //*else {entry.target.classList.remove('show');}*//
    });
});

const firstLook = document.querySelectorAll('.motion');
firstLook.forEach((el) => observer.observe(el));



const initSlider2 = () => {
    const imageList2 = document.querySelector(".slider-wrapper-two2 .image-list2");
    const slideButtons2 = document.querySelectorAll(".slider-wrapper-two2 .slide-button2");
    const sliderScrollbar2 = document.querySelector(".container-two2 .slider-scrollbar2");
    const scrollbarThumb2 = sliderScrollbar2.querySelector(".scrollbar-thumb2");
    const maxScrollLeft2 = imageList2.scrollWidth - imageList2.clientWidth;

    scrollbarThumb2.addEventListener("mousedown", (e) =>{
        const startX = e.clientX;
        const thumbPosition2 = scrollbarThumb2.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition2 = thumbPosition2 + deltaX;
            scrollbarThumb2.style.left =`${newThumbPosition2}px`;
        }

    });

    slideButtons2.forEach(button => {
        button.addEventListener("click", () => {
            const direction2 = button.id === "prev-slide2" ? -1 : 1;
            const scrollAmount2 = imageList2.clientWidth * direction2;
            imageList2.scrollBy({ left: scrollAmount2, behavior: "smooth"});
        });
    });

    const handleSlideButtons2= () => {
        slideButtons2[0].style.display = imageList2.scrollLeft <= 0 ? "none" : "block";
        slideButtons2[1].style.display = imageList2.scrollLeft >= maxScrollLeft2 ? "none" : "block";
    }

    const updateScrollThumbPosition2 = () => {
        const scrollPosition2 = imageList2.scrollLeft;
        const thumbPosition2 = (scrollPosition2 / maxScrollLeft2) * (sliderScrollbar2.clientWidth - scrollbarThumb2.offsetWidth);
        scrollbarThumb2.style.left = `${thumbPosition2}px`;
    } 

    imageList2.addEventListener("scroll", () => {
        handleSlideButtons2();
        updateScrollThumbPosition2();
    })
}

window.addEventListener("load", initSlider2)

const initSlider3 = () => {
    const imageList3 = document.querySelector(".slider-wrapper-two3 .image-list3");
    const slideButtons3 = document.querySelectorAll(".slider-wrapper-two3 .slide-button3");
    const sliderScrollbar3 = document.querySelector(".container-two3 .slider-scrollbar3");
    const scrollbarThumb3 = sliderScrollbar3.querySelector(".scrollbar-thumb3");
    const maxScrollLeft3 = imageList3.scrollWidth - imageList3.clientWidth;

    scrollbarThumb3.addEventListener("mousedown", (e) =>{
        const startX = e.clientX;
        const thumbPosition3 = scrollbarThumb3.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition3 = thumbPosition3 + deltaX;
            scrollbarThumb3.style.left =`${newThumbPosition3}px`;
        }

    });

    slideButtons3.forEach(button => {
        button.addEventListener("click", () => {
            const direction3 = button.id === "prev-slide3" ? -1 : 1;
            const scrollAmount3 = imageList3.clientWidth * direction3;
            imageList3.scrollBy({ left: scrollAmount3, behavior: "smooth"});
        });
    });

    const handleSlideButtons3 = () => {
        slideButtons3[0].style.display = imageList3.scrollLeft <= 0 ? "none" : "block";
        slideButtons3[1].style.display = imageList3.scrollLeft >= maxScrollLeft3 ? "none" : "block";
    }

    const updateScrollThumbPosition3 = () => {
        const scrollPosition3 = imageList3.scrollLeft;
        const thumbPosition3 = (scrollPosition3 / maxScrollLeft3) * (sliderScrollbar3.clientWidth - scrollbarThumb3.offsetWidth);
        scrollbarThumb3.style.left = `${thumbPosition3}px`;
    } 

    imageList3.addEventListener("scroll", () => {
        handleSlideButtons3();
        updateScrollThumbPosition3();
    })
}

window.addEventListener("load", initSlider3)