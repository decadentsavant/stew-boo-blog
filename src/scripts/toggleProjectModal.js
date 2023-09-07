    const projectCards = document.querySelectorAll(".project-card-class");
    const modal = document.getElementById("project-modal");
    const closeButtons = document.getElementsByClassName("close-button");

    projectCards.forEach((card) => {
        card.addEventListener("click", function () {
            modal.classList.remove("hidden");
            modal.classList.add("flex");
        });
    });

    for (let button of closeButtons) {
        button.addEventListener("click", () => {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        });
    };