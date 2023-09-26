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

        
        // Conditionally show GitHub icon
        const githubLink = document.getElementById("github-link");
        if (project.gitHub) {
            githubLink.href = project.gitHub;
            githubLink.classList.remove("hidden");
        } else {
            githubLink.classList.add("hidden");
        }
        
        // Conditionally show second GitHub icon
        const githubLink2 = document.getElementById("github-link2");
        if (project.gitHub2) {
            githubLink2.href = project.gitHub2;
            githubLink2.classList.remove("hidden");
        } else {
            githubLink2.classList.add("hidden");
        }

        // Clear full description in modal body
        const modalBody = document.querySelector("#modal-body");
        modalBody.innerHTML = "";

        // Set full description in modal body
        project.fullDesc.forEach((descObj) => {
            if (descObj.type === "text") {
                const p = document.createElement("p");
                p.textContent = descObj.content;
                p.className = "text-base leading-relaxed text-gray-400";
                modalBody.appendChild(p);
            }
            // ...handle other types if/when needed
        });

        // Clear pills in modal footer
        const modalFooter = document.querySelector("#modal-footer");
        modalFooter.innerHTML = "";

        // Set pill in modal footer
        project.tech.forEach((item) => {
            const pill = document.createElement("span");
            pill.textContent = item;
            pill.className =
                "rounded-full bg-main-purple text-gray-300 text-center p-2";
            modalFooter.appendChild(pill);
        });

        // Show modal
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.style.overflow = "hidden"; // Disable body scroll
    });
});

// Close button logic
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

// Close modal on click outside modal
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.style.overflow = "auto"; // Enable body scroll
    }
});
