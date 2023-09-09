const modal = document.getElementById("project-modal");

const projectCards = document.querySelectorAll(".project-card-class");
projectCards.forEach((card) => {
    card.addEventListener("click", function () {
        // Parse string to project object
        const project = JSON.parse(
            card.getAttribute("data-stringified-project")
        );

        // Set title in modal
        document.getElementById("modal-title").textContent = project.title;

        // Clear full description in modal
        const modalBody = document.querySelector("#modal-body");
        modalBody.innerHTML = "";

        // Set full description in modal
        project.fullDesc.forEach((descObj) => {
            if (descObj.type === "text") {
                const p = document.createElement("p");
                p.textContent = descObj.content;
                p.className = "text-base leading-relaxed text-gray-400";
                modalBody.appendChild(p);
            }
            // ...handle other types when needed
        });

        // Show modal
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.style.overflow = "hidden"; // Disable body scroll
    });
});

// close buttons logic
const closeButtons = document.getElementsByClassName("close-button");
for (let button of closeButtons) {
    button.addEventListener("click", () => {
        // Reset modal scroll position
        const modalBody = document.querySelector("#modal-body");
        modalBody.scrollTop = 0;

        // Hide modal
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.style.overflow = "auto"; // Enable body scroll
    });
}
