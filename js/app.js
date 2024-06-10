const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
})

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function () {
        navMenu.classList.remove("nav-menu_visible")
    })
})

//  Selector con id 

document.getElementById("navegadorSelect").addEventListener("change", function () {
    var selectedOption = this.value;
    if (selectedOption !== "-- Elige una sección --") {
        window.location.href = selectedOption;
    }
});

// Slider

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = new Date().getDay() - 1;

    // Mostrar el slide correspondiente al día actual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });
    }

    // Mostrar el slide del día actual al cargar la página
    showSlide(currentIndex);

    // Flechas
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Gestos táctiles
    const hammer = new Hammer(slider);
    hammer.on("swipeleft", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
    hammer.on("swiperight", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Cambiar de slide automáticamente cada 10 segundos
    setInterval(function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 10000);
});
