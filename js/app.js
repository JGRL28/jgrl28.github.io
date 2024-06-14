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

