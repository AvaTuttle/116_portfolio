document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector("header nav");

    hamburger.addEventListener("click", function () {
        nav.classList.toggle("nav-active");
    });

    document.addEventListener("click", function (event) {
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            nav.classList.remove("nav-active");
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            nav.classList.remove("nav-active");
        }
    });
});

