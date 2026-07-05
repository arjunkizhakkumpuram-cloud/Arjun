/* ===========================================
   PORTFOLIO SCRIPT
=========================================== */

// ===============================
// Typing Effect
// ===============================

const typingElement = document.querySelector(".typing");

const words = [
    "Python Developer",
    "Django ",
    "Flutter Developer",
    "REST API",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.innerHTML = nav.classList.contains("active")

        ? '<i class="fa-solid fa-xmark"></i>'

        : '<i class="fa-solid fa-bars"></i>';

});


// ===============================
// Close Menu After Click
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ===============================
// Reveal Animation
// ===============================

const reveals = document.querySelectorAll(

    "section, .project-card, .skill-card, .timeline-item"

);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.classList.add("active");

            item.classList.add("reveal");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =

            "rgba(15,23,42,.95)";

        header.style.boxShadow =

            "0 5px 20px rgba(0,0,0,.3)";

    }

    else {

        header.style.background =

            "rgba(255,255,255,.05)";

        header.style.boxShadow =

            "none";

    }

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") === "#" + current

        ) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


// ===============================
// Current Year
// ===============================

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p:last-child");

if (footerText) {

    footerText.innerHTML =

        `© ${year} Arjun K R. All Rights Reserved.`;

}