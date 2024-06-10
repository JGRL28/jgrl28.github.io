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


