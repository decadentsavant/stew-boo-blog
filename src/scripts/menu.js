const hamburgerIcon = document.querySelector("#hamburger-icon");
const navigationMenu = document.querySelector("#navigation-menu");

hamburgerIcon.addEventListener("click", () => {
    if (navigationMenu.classList.contains("hidden")) {
        navigationMenu.classList.remove("hidden");
    } else {
        navigationMenu.classList.add("hidden");
    }
});
