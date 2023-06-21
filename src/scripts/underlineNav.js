    const currentLocation = window.location.pathname;
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        const linkText = link.innerText;
        if (linkText === "Home") {
            if (currentLocation === href) {
                link.classList.add("underline");
            }
        } else if (currentLocation.startsWith(href)) {
            link.classList.add("underline");
        }
    });
