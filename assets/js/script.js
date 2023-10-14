const menu = document.querySelector('#menu');
const btn = document.querySelector('#menuBtn');

btn.addEventListener('click', (e) => {

    menu.classList.toggle('active')

});

// Modo oscuro

const changeTheme = document.querySelector('.theme');
const changeThemeMobile = document.querySelector('.themeMobile');
const html = document.querySelector('#html')

var contenidoOriginal = changeThemeMobile.innerHTML;

changeTheme.addEventListener("click", function() {

    html.classList.toggle('dark')
});

changeThemeMobile.addEventListener("click", function() {

    html.classList.toggle('dark')

    if (changeThemeMobile.textContent.includes("Light Theme")) {
        changeThemeMobile.innerHTML = contenidoOriginal.replace("Light Theme", "Dark Theme");
    } else {
        changeThemeMobile.innerHTML = contenidoOriginal;
    }
});


// Animaciones


document.addEventListener("DOMContentLoaded", function() {
    const nombre = document.querySelector(".inicio");
    nombre.classList.add("active");

    const code = document.querySelector(".code");
    code.classList.add("active");

    const header = document.querySelector(".header");
    header.classList.add("active");
});

// Others

function activateOnScroll(elements) {
    elements.forEach((element) => {
        const distanceFromTop = element.element.getBoundingClientRect().top;
        if (distanceFromTop - window.innerHeight < 0) {
            element.element.classList.add(element.className);
        }
    });
}

const animations = [
    { element: document.querySelector(".left-animation"), className: "active" },
    { element: document.querySelector(".right-animation"), className: "active" },
];

const cards = [
    { element: document.querySelector(".title-card"), className: "active" },
    { element: document.querySelector(".card1"), className: "active" },
    { element: document.querySelector(".card2"), className: "active" },
    { element: document.querySelector(".card3"), className: "active" },
    { element: document.querySelector(".card4"), className: "active" },
    { element: document.querySelector(".card5"), className: "active" },
    { element: document.querySelector(".card6"), className: "active" },
    { element: document.querySelector(".card7"), className: "active" },
    { element: document.querySelector(".card8"), className: "active" },
];

window.addEventListener("scroll", () => {
    activateOnScroll(animations);
    activateOnScroll(cards);
});

