 let yp = parseFloat(localStorage.getItem("cursorY") || "0");
    let xp = parseFloat(localStorage.getItem("cursorX") || "0");
    let mouseX = xp,
        mouseY = yp;
    let prevMouseX = 0,
        prevMouseY = 0;
    let overshootX = 0,
        overshootY = 0;

    function updatePosition() {
        const targetX = mouseX + overshootX;
        const targetY = mouseY + overshootY;
        xp += (targetX - xp) / 10;
        yp += (targetY - yp) / 10;
        const cursorElement = document.querySelector(
            ".cursor-element"
        );
        cursorElement.style.left = xp - 140 + "px";
        cursorElement.style.top = yp - 140 + "px";

        // Reduce the overshoot gradually, creating a settle effect
        overshootX *= 0.9;
        overshootY *= 0.9;
    }

    document.addEventListener("mousemove", function (e) {
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Calculate the difference between the current and previous mouse positions
        const dx = mouseX - prevMouseX;
        const dy = mouseY - prevMouseY;

        // Apply a scaling factor to the difference to create overshoot
        overshootX = dx * 0.5; 
        overshootY = dy * 0.5; 
    });

    setInterval(function () {
        if (window.innerWidth >= 640) {
            updatePosition();
        }
    }, 17);

    // Save the cursor's position to localStorage when the page is unloaded
    window.addEventListener("unload", function () {
        localStorage.setItem("cursorX", xp.toString());
        localStorage.setItem("cursorY", yp.toString());
    });