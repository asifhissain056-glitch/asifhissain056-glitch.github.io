// Mobile Navigation
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});


// Typing Animation
const typingText = document.getElementById("typing-text");

const words = [
    "ICT Undergraduate",
    "Aspiring Software Engineer",
    "Programming Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1300);
            return;
        }

    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 85);
}

typeEffect();


// Theme Toggle
const themeBtn = document.getElementById("theme-btn");
const themeIcon = themeBtn.querySelector("i");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeIcon.classList.replace("fa-sun", "fa-moon");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    if (isLight) {
        themeIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("portfolio-theme", "light");
    } else {
        themeIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("portfolio-theme", "dark");
    }
});


// Current Year
document.getElementById("current-year").textContent =
    new Date().getFullYear();


// Back to Top
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Active Navigation Link
const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});