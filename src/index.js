const featureItems = document.querySelectorAll(".feature-item");
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.querySelector("nav ul");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    navMenu.classList.toggle("flex");
});

featureItems.forEach(item => {
    item.addEventListener("click", () => {
        // Remove the active class from all items
        featureItems.forEach(item => item.classList.remove("active"));

        // Add the active class to the clicked item
        item.classList.add("active");
    });
});