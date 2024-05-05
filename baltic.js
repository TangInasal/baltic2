document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.querySelector(".search-btn");
    const container = document.querySelector(".container");

    searchBtn.addEventListener("mouseenter", function() {
        container.style.backgroundColor = "rgba(137, 78, 63, 0.7)";
    });

    searchBtn.addEventListener("mouseleave", function() {
        container.style.backgroundColor = "rgba(137, 78, 63, 0.85)";
    });
});