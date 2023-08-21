const wrapper = document.querySelector("#wrapper");

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        wrapper.style.opacity = ".95";
        wrapper.style.transform = "translateY(0)";
    }, 2000); // 2 seconds delay
});
